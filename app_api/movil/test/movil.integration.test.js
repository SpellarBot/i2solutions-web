describe('MOVIL TEST', () => {
  after(() => {
    process.exit(0)
  })
  it('GET puesto de trabajo por area', (done) => {
    request(app)
      .get('/api/movil/puesto_trabajo/area_trabajo/1')
      .end(function(err, res) {
      assert.equal(Array.isArray(res.body.datos),true, 'debe ser un array')
      assert.equal(res.body.estado, true, 'El estado debe ser true')
      assert.equal(res.body.codigo_estado, 200, 'El codigo debe ser 200')
      done()
    })
  })
})
