import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Academia from 'App/Models/Academia'

export default class extends BaseSeeder {
  public async run () {
    await Academia.createMany([
      {endereco: 'Qnp 09 conjunto J adpt.24', numero: 61982756481, nome: "AcademiaFitt"},
      {endereco: 'Qnq 32 conjunto D adpt.2', numero: 61978496481, nome: "DumpFit"},
      {endereco: 'Qnr 02 conjunto A lote 6', numero: 61756541113, nome: "HerculesFit"},
    ])
  }
}
