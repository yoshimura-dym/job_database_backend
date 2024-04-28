import {Job,JobI} from '../models/Job'

export type CustomPick<P, K extends keyof P> = {
  [O in K]: P[O]
}

export interface IJob {
  createJob(data: JobI): Promise<Job>
  findJobByPref(prefecture: string): Promise<Job | null>
  findAllJob(): Promise<Job[]>
}

export class JobRepository implements IJob {
  async createJob(data:any): Promise<Job>
  {
    return await Job.create(data)
  }

  async findJobByPref(prefecture: string): Promise<Job | null>
  {
    return await Job.findOne({ where: { prefecture: prefecture }})
  }

  async findAllJob(): Promise<Job[]>
  {
    return await Job.findAll()
  }

  static builder(): IJob
  {
    return new this()
  }
}