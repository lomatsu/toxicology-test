import { SampleModel } from '../database/model/SampleModel'

export class SampleViewModel {
  id: number
  createdAt?: string | Date
	codigo_amostra: string
	Cocaína: number
	Anfetamina: number
	Metanfetamina: number
	MDA: number
	MDMA: number
	THC: number
  Morfina: number
  Codeína: number
  Heroína: number
  Benzoilecgonina: number
  Cocaetileno: number
  Norcocaína: number
  result: string

	constructor(params: SampleModel) {
    this.id = params.id
    this.createdAt = params.created_at ? params.created_at : new Date()
    this.codigo_amostra = params.sample_code
    this.Cocaína = params.cocaina
    this.Anfetamina = params.anfetamina
    this.Metanfetamina = params.metanfetamina
    this.MDA = params.mda
    this.MDMA = params.mdma
    this.THC = params.thc
    this.Morfina = params.morfina
    this.Codeína = params.codeina
    this.Heroína = params.heroina
    this.Benzoilecgonina = params.benzoilecgonina
    this.Cocaetileno = params.cocaetileno
    this.Norcocaína = params.norcocaina
    this.result = params.result
	}
}

export default SampleModel