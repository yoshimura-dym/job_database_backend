import { IJob} from '../repositories/JobRepository'
import {Job,JobI} from '../models/Job'

export interface IJobService {
  createJob(arg0: JobI): Promise<Job>
  findAll(): Promise<Job[]>
  findJobByPref(prefecture: string): Promise<Job | null>
}

export class JobService implements IJobService
{
  constructor(private JobRepository: IJob) {
  }

  async createJob(JobI:any): Promise<Job>
  {
    const Job = await this.JobRepository.createJob(JobI)
    return Job
  }

  async findAll(): Promise<Job[]>
  {
    return await this.JobRepository.findAllJob()
  }

  async findJobByPref(prefecture: string): Promise<Job | null>
  {
    return await this.JobRepository.findJobByPref(prefecture)
  }

  static builder(repository: IJob): IJobService
  {
    return new this(repository)
  }
}