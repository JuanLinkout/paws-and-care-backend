import { ObjectId } from "mongodb";
import { ICustomer } from "../../../../domain/entities/customer";
import { ICreateCustomer } from "../../../../domain/entities/customer";
import { ICreateCustomerRepository } from "../../../../domain/repositories/customers/create-customers-respository";
import { IDeleteCustomersRepository } from "../../../../domain/repositories/customers/delete-customers-respository";
import { IGetCustomersRepository } from "../../../../domain/repositories/customers/get-customers-respository";
import { IUpdateCustomerRepository } from "../../../../domain/repositories/customers/update-customers-respository";
import { MongoHelper } from "../mongo-helper";

export class MongoCustomerRepository
  implements
    IGetCustomersRepository,
    IDeleteCustomersRepository,
    IUpdateCustomerRepository,
    ICreateCustomerRepository
{
  async get(): Promise<ICustomer[]> {
    const collection = MongoHelper.getCollection("customers");
    const customers = await collection.find({}).toArray();
    return MongoHelper.mapCollection(customers);
  }

  async delete(id: string): Promise<void> {
    const collection = MongoHelper.getCollection("customers");
    const objectId = new ObjectId(id);
    await collection.deleteOne({ _id: objectId });
  }

  async update(customer: ICustomer): Promise<void> {
    const collection = MongoHelper.getCollection("customers");
    const objectId = new ObjectId(customer.id);
    await collection.updateOne(
      { _id: objectId },
      {
        $set: {
          name: customer.name,
          email: customer.email,
          document: customer.document,
          phone: customer.phone,
        },
      }
    );
  }

  async create(customer: ICreateCustomer): Promise<void> {
    const collection = MongoHelper.getCollection("customers");
    await collection.insertOne({
      name: customer.name,
      email: customer.email,
      document: customer.document,
      phone: customer.phone,
    });
  }
}
