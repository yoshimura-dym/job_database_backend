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
    // 整数でない値をデフォルト値に置換
    if (isNaN(req.body.job_salary_min) || req.body.job_salary_min === '') {
        req.body.job_salary_min = 0; // または他の適切なデフォルト値
    }
    if (isNaN(req.body.job_salary_max) || req.body.job_salary_max === '') {
        req.body.job_salary_max = 0; // または他の適切なデフォルト値
    }
  let exist: Job | null
  try {
    exist = await this.jobService.findJobById(req.body.job_id)
  } catch (e) {
    console.log(e)
    return res.status(409).json({ message: "jobRepository already exists" });
  }

  if (exist !== null){
    return res.status(409).json({ message: "jobRepository already exists" });
  }
  
    const job = await this.jobService.createJob(req.body)
   return res.json(job);
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