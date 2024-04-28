import { Router } from 'express'
import {IJobController} from '../controllers/jobController'

const router = Router()

export interface IWebHooks {
  register(): Router
}

export class WebHooks implements IWebHooks {
  constructor(
      private jobController: IJobController
  ) {
  }

  register(): Router
  {
    router.get("/v1/jobs", (req, res) => this.jobController.getJobs(req, res))
    router.post("/v1/jobs", (req, res) => this.jobController.saveJob(req, res))
    return router
  }


  static builder(
      jobController: IJobController
  ): IWebHooks
  {
    return new this(jobController);
  }
}