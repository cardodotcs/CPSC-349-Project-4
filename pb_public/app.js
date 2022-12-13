const USERNAME = "rickardo@csu.fullerton.edu";
const PASSWORD = "password1.";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null))
);
function App() {
  return /* @__PURE__ */ React.createElement("div", { className: "App" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold underline bg-green-500" }, "Hello, ", authData.admin.email));
}
