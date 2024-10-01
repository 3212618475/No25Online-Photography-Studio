const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot07j52/",
            name: "springboot07j52",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot07j52/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上摄影工作室"
        } 
    }
}
export default base
