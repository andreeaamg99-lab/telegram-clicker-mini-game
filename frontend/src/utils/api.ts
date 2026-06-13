import { mockApi } from "../mocks/api" 

export const fetchData = async (endpoint: any = "", options?: any): Promise<any> => {
 switch (endpoint) {  
  case "/api/click": 
   return mockApi.click()
  case "/api/upgrades":
   returnmockApi.getUpgrades()  
  case "/api/missions":
    return [] 
  default: 
    return { 
      coins: 0,
      crystals: 0,
      energy: 100,
      progress:0
    }
 }
}
