import { Application, Request, Response } from "express"
import { ControllerBase } from "../common/ControllerBase"
import { ISampleRepository } from "../repositories/SampleRepository"
import { SampleViewModel } from "../view-model/SampleViewModel"
import { SampleModel } from "../database/model/SampleModel"
import { cutNotes } from '../lib/constants/cut-notes'

export class SampleController extends ControllerBase<ISampleRepository> {
  public static readonly baseRouter: string = "/api/samples"
  constructor(app: Application, repository: ISampleRepository) {
    super(app, repository)
  }
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const samples = await this.repository.getAll()
      const response = samples.map((sample) => new SampleViewModel(sample))
      res.json({ response })
    } catch (error: any) {
      res.status(500).json({ message: "Error on get all samples" });
    }
  }

  private async verifyResult(sample: SampleModel): Promise<any> {
    const isPositiveOrNegative = []
    if (Number(sample.cocaina) >= cutNotes.cocaina &&
      (
        sample.benzoilecgonina >= 0.5 ||
        sample.cocaetileno >= 0.5 ||
        sample.norcocaina >= 0.5)
    ) {
      isPositiveOrNegative.push('Positivo')
    } else {
      isPositiveOrNegative.push('Negativo')
    }

    Number(sample.anfetamina) >= cutNotes.anfetamina ?
      isPositiveOrNegative.push('Positivo') :
      isPositiveOrNegative.push('Negativo')

    Number(sample.metanfetamina) >= cutNotes.metanfetamina ?
      isPositiveOrNegative.push('Positivo') :
      isPositiveOrNegative.push('Negativo')

    Number(sample.mda) >= cutNotes.mda ?
      isPositiveOrNegative.push('Positivo') :
      isPositiveOrNegative.push('Negativo')

    Number(sample.mdma) >= cutNotes.mdma ?
      isPositiveOrNegative.push('Positivo') :
      isPositiveOrNegative.push('Negativo')

    Number(sample.thc) >= cutNotes.thc ?
      isPositiveOrNegative.push('Positivo') :
      isPositiveOrNegative.push('Negativo')

    Number(sample.morfina) >= cutNotes.morfina ?
      isPositiveOrNegative.push('Positivo') :
      isPositiveOrNegative.push('Negativo')

    Number(sample.codeina) >= cutNotes.codeina ?
      isPositiveOrNegative.push('Positivo') :
      isPositiveOrNegative.push('Negativo')

    Number(sample.heroina) >= cutNotes.heroina ?
      isPositiveOrNegative.push('Positivo') :
      isPositiveOrNegative.push('Negative')

    return isPositiveOrNegative.some(elem => elem === "Positivo") ? "Positivo" : "Negativo"
  }

  public async save(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body
      if (!body) {
        res.status(400).json({ message: "Body is required for this request" })
      }
      const sampleModel = new SampleModel(body)
      const result = await this.verifyResult(sampleModel)
      sampleModel.result = result as string
      const newSample = await this.repository.create(sampleModel)
      const newSampleViewModel = new SampleViewModel(newSample)
      const response = {
        Codigo_amostra: newSampleViewModel.codigo_amostra,
        Resultado: newSampleViewModel.result
      }

      res.json(response)

    } catch (error: any) {
      res.status(500).json({ message: "Error on save sample" });
    }
  }
  public async registerRoutes(): Promise<void> {
    this.app.get(SampleController.baseRouter, this.getAll.bind(this))
    this.app.post(SampleController.baseRouter, this.save.bind(this))
  }
}