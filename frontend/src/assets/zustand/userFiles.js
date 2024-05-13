import { create } from "zustand"


const useFiles = create((set) => ({
      selectedFile: [],
      setSelectedFile: (selectedFile) => set({selectedFile}),
      reloadTrigger: 1,
      setReloadTrigger : (reloadTrigger) => set({reloadTrigger}),
      sortBy: 'name',
      setSortBy: (sortBy) => set({sortBy}),
      sortDirection: 'desc' ,
      setSortDirection: (sortDirection) => set({sortDirection}),
}));

export default useFiles;