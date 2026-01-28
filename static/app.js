// Phase-2: keep frontend UX behavior only (no localStorage auth)

(function () {
    document.querySelectorAll("[data-toggle-password]").forEach((chk) => {
      chk.addEventListener("change", () => {
        const targetId = chk.getAttribute("data-toggle-password");
        const input = document.getElementById(targetId);
        if (!input) return;
        input.type = chk.checked ? "text" : "password";
      });
    });
  })();