import {Request, Response} from 'express'
import {IJobService} from '../service/jobService'
import {Job} from '../models/Job'


export interface IJobController {
  getJobs(req: Request, res: Response): Promise<void>
  saveJob(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>
}

export class JobController implements IJobController {
  constructor(private jobService: IJobService) {
  }

  async saveJob(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>
  {
    const {job_id} = req.body as {job_id: string}
    let exist: Job | null
    try {
      exist = await this.jobService.findJobByPref(job_id)
    } catch (e) {
      console.log(e)
      return res.status(409).json({ message: "JobRepository already exists" });
    }

    if (exist !== null){
      return res.status(409).json({ message: "JobRepository already exists" });
    }

    // 保存
    const job = await this.jobService.createJob(req.body)
    res.json(job);
  }

  async getJobs(req: Request, res: Response)
  {
    const jobs = await this.jobService.findAll()
    res.json(jobs)
  }

  static builder(jobService: IJobService)
  {
    return new this(jobService)
  }
}