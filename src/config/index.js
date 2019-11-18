
//Defining the standard max value to the items that will be search.
export const MAX_ITEMS_SEARCH = 21;

//Defining the SerachOptions (which are my top 5 favorite languages).
export const searchOptions = [
    { value: 'javascript', label: 'JavaScript', labelColor: "warning" },
    { value: 'csharp', label: 'C#', labelColor: "primary" },
    { value: 'php', label: 'PHP', labelColor: "secondary" },
    { value: 'ruby', label: 'Ruby', labelColor: "danger" },
    { value: 'python', label: 'Python', labelColor: "info" },
];

// Defining the menu pages and the keys to control the Container Section.
export const MenuList = [
    {
      name: "Pesquisar repositórios",
      key: "SEARCH_PAGE"
    },
    {
      name: "Histórico de repositórios pesquisados",
      key: "REPO_HISTORY"
    }
  ]
