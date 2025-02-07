document.addEventListener("DOMContentLoaded", (event) => {
    let navbar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="index.html">Hem</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="html/about.html">Om Oss</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="html/menu.html">Meny</a>
  </li>
</ul></div></nav>`;

    let footer = `<footer class="footer mt-auto py-3 bg-body-tertiary">
        <div class="container">
            <span class="text-body-secondary">Footer is placed here</span>
        </div>
    </footer>`;

    document.getElementById("bodyId").insertAdjacentHTML("afterbegin", navbar);
    document.getElementById("bodyId").insertAdjacentHTML("beforeend", footer);
});
