(function () {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);

    let t;
    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add("show");
        clearTimeout(t);
        t = setTimeout(() => toast.classList.remove("show"), 1800);
    }

    document.addEventListener("click", (e) => {
        const el = e.target.closest("[data-soon]");
        if (!el) return;
        e.preventDefault();
        showToast("En construction ✨");
    });
})();
