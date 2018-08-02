export class FurnitureModel {
  constructor(
    private id: string,
    private createdBy: string,
    private model: string,
    private year: number,
    private description: string,
    private price: number,
    private image: string
  ) { }
}
