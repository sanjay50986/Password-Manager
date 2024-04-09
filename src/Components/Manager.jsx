import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const passwordRef = useRef();
  const passwordRefShow = useRef();
  const [form, setform] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  function showPassword() {
    if (passwordRef.current.src.includes("icons/eyebrow.png")) {
      passwordRef.current.src = "icons/eye.png";
      passwordRefShow.current.type = "password";
    } else {
      passwordRef.current.src = "icons/eyebrow.png";
      passwordRefShow.current.type = "text";
    }
  }

  function savePassword() {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "password",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      setform({ site: "", username: "", password: "" });
    }
  }

  function deletePassword(id) {
    let confirmMsg = confirm("Do you really want to delete this password");
    if (confirmMsg) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
  }

  function editPassword(id) {
    setform(passwordArray.filter((item) => item.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));

  }

  function handleChange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  function copyText(text) {

    navigator.clipboard.writeText(text);
  }

  return (
    <>

      <div className="absolute inset-0 -z-10 h-full w-full bg-sky-50">
        <div className="absolute bottom-0 left-0 right-0 top-0]"></div>
      </div>

      <div className="p-2 md:p-0 md:mycontainer min-h-[88vh]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-sky-700">&lt;</span>
          Pass
          <span className="text-sky-700">OP/&gt;</span>
        </h1>
        <p className="text-sky-900 text-lg text-center">
          Your own Password Manager
        </p>
        <div className="flex flex-col p-4 text-black gap-6 items-center">
          <input
            className="rounded-full border border-sky-400 w-full p-4 py-1"
            type="text"
            name="site"
            placeholder="Enter Website URL"
            value={form.site}
            id="site"
            onChange={handleChange}
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              className="rounded-full border border-sky-400 w-full p-4 py-1"
              type="text"
              name="username"
              placeholder="Enter Username"
              value={form.username}
              id="username"
              onChange={handleChange}
            />

            <div className="relative">
              <input
                className="rounded-full border border-sky-400 w-full p-4 py-1"
                type="password"
                ref={passwordRefShow}
                name="password"
                placeholder="Enter Password"
                value={form.password}
                id="password"
                onChange={handleChange}
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={passwordRef}
                  className="p-1"
                  width={26}
                  src="icons/eye.png"
                />
              </span>
            </div>
          </div>
          <button
            className="flex justify-center items-center gap-2 bg-sky-500 rounded-[15px] border border-sky-700 px-7 py-2 w-fit  hover:bg-sky-600"
            onClick={savePassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/wzwygmng.json"
              trigger="hover"
              stroke="bold"
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="text-xl font-bold py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Password to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden mb-10">
              <thead className="bg-sky-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody className="bg-sky-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" flex items-center justify-center gap-5 py-2 border border-white text-center">
                        <div className="flex justify-center items-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                        </div>

                        <div
                          className="cursor-pointer size-7  lordiconcopy"
                          onClick={() => {
                            copyText(item.site);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </td>

                      <td className=" py-2 border border-white text-center ">
                        <div className="flex items-center justify-center gap-5">
                          <span>{item.username}</span>
                          <div
                            className="cursor-pointer size-7 lordiconcopy"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className=" py-2 border border-white text-center">
                        <div className="flex items-center justify-center gap-5">
                          <span>{item.password}</span>
                          <div
                            className="cursor-pointer size-7 lordiconcopy"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className="edit py-2 border border-white text-center">
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                          ></lord-icon>
                        </span>

                        <span
                          className="copy cursor-pointer mx-1"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
