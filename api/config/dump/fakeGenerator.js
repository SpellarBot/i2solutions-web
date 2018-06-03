// https://github.com/marak/Faker.js/
const faker = require('faker')
faker.locale = 'es'
console.log(faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'))
// let knex = require('knex')
var knex = require('knex')({
  client: 'sqlite',
  useNullAsDefault: true
  // rowMode: true,
  // wrapIdentifier: (value, origImpl, queryContext) => origImpl(convertToSnakeCase(value))
})
let x = knex({ a: 'table', b: 'table' })
  .select({
    aTitle: 'a.title',
    bTitle: 'b.title'
  })
  .whereRaw('?? = ??', ['a.column_1', 'b.column_2']).toSQL()
console.log(x['sql'])
