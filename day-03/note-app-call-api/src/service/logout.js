import router from "@/router";

export default async function(path) {
    localStorage.removeItem("token")
    return router.go(path)
}