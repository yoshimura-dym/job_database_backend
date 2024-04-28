import {JobRepository} from '../repositories/JobRepository'
import {IWebHooks, WebHooks} from '../router'
import {JobService} from '../service/jobService'
import {JobController} from '../controllers/jobController'

export const injection = (): IWebHooks => {
  const jobRepository = JobRepository.builder()

  const jobService = JobService.builder(jobRepository)
  const jobHandler = JobController.builder(jobService)
  // ここでルーティングの設定
  return WebHooks.builder( jobHandler )
}