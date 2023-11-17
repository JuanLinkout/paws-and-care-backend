import { ObjectId } from "mongodb";
import { ICustomer } from "../../../../domain/entities/customer";
import { MongoHelper } from "../mongo-helper";
import { IUpdatePetRepository } from "../../../../domain/repositories/pets/update-pet-respository";
import { ICreatePetRepository } from "../../../../domain/repositories/pets/create-pet-respository";
import { ICreatePet, IPet } from "../../../../domain/entities/pet";
import { IDeletePetRepository } from "../../../../domain/repositories/pets/delete-pet-respository";

export class MongoPetRepository
  implements
    ICreatePetRepository,
    IDeletePetRepository,
    IUpdatePetRepository,
    ICreatePetRepository
{
  async get(): Promise<ICustomer[]> {
    const collection = MongoHelper.getCollection("pets");
    const customers = await collection.find({}).toArray();
    return MongoHelper.mapCollection(customers);
  }

  async delete(id: string): Promise<void> {
    const collection = MongoHelper.getCollection("pets");
    const objectId = new ObjectId(id);
    await collection.deleteOne({ _id: objectId });
  }

  name: string;
  customerName: string;
  customerId: string;
  type: string;
  breed: string;

  async update(pet: IPet): Promise<void> {
    const collection = MongoHelper.getCollection("pets");
    const objectId = new ObjectId(pet.id);
    await collection.updateOne(
      { _id: objectId },
      {
        $set: {
          name: pet.name,
          customerName: pet.customerName,
          customerId: pet.customerId,
          type: pet.type,
          breed: pet.breed,
        },
      }
    );
  }

  async create(pet: ICreatePet): Promise<void> {
    const collection = MongoHelper.getCollection("pets");
    await collection.insertOne({
      name: pet.name,
      customerName: pet.customerName,
      customerId: pet.customerId,
      type: pet.type,
      breed: pet.breed,
    });
  }
}
