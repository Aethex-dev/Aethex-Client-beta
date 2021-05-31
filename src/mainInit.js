export default function (root) {
    // Language
    if (root.$cookie.getCookie("locale")) {
        root.$i18n.locale = root.$cookie.getCookie("locale");
    }

    // Color theme
    if (root.$cookie.getCookie("colorSchemeMode")) {
        $(".ROOT_ContentLayout").addClass(root.$cookie.getCookie("colorSchemeMode"));
    } else {
        $(".ROOT_ContentLayout").addClass("scheme-dark");
    }
}