window.CMS_CONFIG = {
  site: {
    title: "THE PASHUPATINATH NEWS",
    url: "https://thepashupatinathnews.com"
  },
  
  collections: [
    {
      name: "news",
      label: "Khabar / News",
      path: "/",
      fileNaming: "news.html",
      templateFile: "news-template.html",
      fields: [
        { name: "title", label: "Khabar ka Title", widget: "string", required: true },
        { name: "category", label: "Category", widget: "select", options: ["INDIA","CHHATTISGARH","SARANGARH","KHEL","DHARM","RAJNITI","CRIME","EDUCATION"], required: true },
        { name: "date", label: "Date", widget: "datetime", required: true },
       
