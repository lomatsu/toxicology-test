import { SampleViewModel } from "../../view-model/SampleViewModel"
import { ModelBase } from "./Base"

export class SampleModel extends ModelBase {
	sample_code: string
	cocaina: number
	anfetamina: number
	metanfetamina: number
	mda: number
	mdma: number
	thc: number
  morfina: number
  codeina: number
  heroina: number
  benzoilecgonina: number
  cocaetileno: number
  norcocaina: number
  result: string

	constructor(params: SampleViewModel) {
		super(params)
    this.sample_code = params.codigo_amostra
    this.cocaina = params.Cocaína
    this.anfetamina = params.Anfetamina
    this.metanfetamina = params.Metanfetamina
    this.mda = params.MDA
    this.mdma = params.MDMA
    this.thc = params.THC
    this.morfina = params.Morfina
    this.codeina = params.Codeína
    this.heroina = params.Heroína
    this.benzoilecgonina = params.Benzoilecgonina
    this.cocaetileno = params.Cocaetileno
    this.norcocaina = params.Norcocaína
    this.result = params.result
	}
}

export default SampleModel