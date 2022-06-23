export class ModelBase {
	id: number
	created_at?: Date | string

	constructor(params: ModelBase) {
		this.id = params.id
		this.created_at = params.created_at
	}
}

export default ModelBase