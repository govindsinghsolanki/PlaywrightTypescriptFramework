import { faker } from '@faker-js/faker';

export function generateUniqueId():string{
    return faker.number.int({min:1000,max:9999}).toString();
}
