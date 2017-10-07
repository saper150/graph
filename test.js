function test() {
    camera.position.y = 2;
    camera.position.z = 3;
    const bodyDef = new b2BodyDef();
    const ground = world.CreateBody(bodyDef);

    const chainShape = new b2ChainShape();
    chainShape.vertices.push(new b2Vec2(-2, 0))
    chainShape.vertices.push(new b2Vec2(2, 0))
    chainShape.vertices.push(new b2Vec2(2, 4))
    chainShape.vertices.push(new b2Vec2(-2, 4))

    chainShape.CreateLoop()
    ground.CreateFixtureFromShape(chainShape, 0)

    const shape = new b2PolygonShape
    shape.SetAsBoxXYCenterAngle(1.5, 1, new b2Vec2(0, 1), 0)

    const psd = new b2ParticleSystemDef()
    psd.radius = 0.025
    psd.dampingStrength = 0.2

    const particleSystem = world.CreateParticleSystem(psd)

    const pd = new b2ParticleGroupDef()
    pd.shape = shape;
    const group = particleSystem.CreateParticleGroup(pd)


    Graph.random(8, 0.5).spawn()
}