import { Knex } from "knex"
import { SampleModel } from '../database/model/SampleModel'
import { IRepository } from "./Repository"

export interface ISampleRepository extends IRepository<SampleModel> {}

export class SampleRepository implements ISampleRepository {
  constructor(private db: Knex) { }
  async create(data: SampleModel): Promise<SampleModel> {
    const isSampleCodeAlreadyExists = await this.db
      .select("*")
      .from("samples")
      .where({ sample_code: data.sample_code })
      .then((d) => d[0])

    return this.db.insert(data, "*").into("samples").then((d) => d[0])

  }
  getAll(): Promise<SampleModel[]> {
    return this.db.select("*").from("samples")
  }
}