import {faker} from "@faker-js/faker";
import{AdminData} from "../types/admin.types";

export function createUserName():string
{
  return `test_${faker.internet.username()}`;
    
}