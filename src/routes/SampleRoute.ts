import { Application } from "express"
import { SampleController } from "../sample/SampleController"
import { ISampleRepository } from "../repositories/SampleRepository"
export const registerSampleRoute = (
  app: Application,
  repository: ISampleRepository,
): void => {
  const controller = new SampleController(
    app,
    repository,
  )
  controller.registerRoutes()
}