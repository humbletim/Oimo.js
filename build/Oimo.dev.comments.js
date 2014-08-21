///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.dbvt.DBVTNode
// maybe goes with  ../../src/dev/collision/broadphase/dbvt/DBVTNode.js
/**
 * A node of the dynamic bounding volume tree.
 * @author saharan
 */
OIMO.DBVTNode=function(...){}
OIMO.DBVTNode.prototype={
	/**
	 * The first child node of this node.
	 */
	this.child1=...

	/**
	 * The second child node of this node.
	 */
	this.child2=...

	/**
	 * The parent node of this tree.
	 */
	this.parent=...

	/**
	 * The proxy of this node. This has no value if this node is not leaf.
	 */
	this.proxy=...

	/**
	 * The maximum distance from leaf nodes.
	 */
	this.height=...

	/**
	 * The AABB of this node.
	 */
	this.aabb=...

}; // eof: com.element.oimo.physics.collision.broadphase.dbvt.DBVTNode

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.dbvt.DBVTBroadPhase
// maybe goes with  ../../src/dev/collision/broadphase/dbvt/DBVTBroadPhase.js
/**
 * A broad-phase algorithm using dynamic bounding volume tree.
 * @author saharan
 */
OIMO.DBVTBroadPhase=function(...){}
OIMO.DBVTBroadPhase.prototype={
}; // eof: com.element.oimo.physics.collision.broadphase.dbvt.DBVTBroadPhase

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.dbvt.DBVTProxy
// maybe goes with  ../../src/dev/collision/broadphase/dbvt/DBVTProxy.js
/**
 * A proxy for dynamic bounding volume tree broad-phase.
 * @author saharan
 */
OIMO.DBVTProxy=function(...){}
OIMO.DBVTProxy.prototype={
	/**
	 * The leaf of the proxy.
	 */
	this.leaf=...

}; // eof: com.element.oimo.physics.collision.broadphase.dbvt.DBVTProxy

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.dbvt.DBVT
// maybe goes with  ../../src/dev/collision/broadphase/dbvt/DBVT.js
/**
 * A dynamic bounding volume tree for the broad-phase algorithm.
 * @author saharan
 */
OIMO.DBVT=function(...){}
OIMO.DBVT.prototype={
	/**
	 * The root of the tree.
	 */
	this.root=...

	/**
	 * Move a leaf.
	 * @paramleaf
	 */
	moveLeaf:function(){}...

	/**
	 * Insert a leaf to the tree.
	 * @paramnode
	 */
	insertLeaf:function(){}...

	/**
	 * Delete a leaf from the tree.
	 * @paramnode
	 */
	deleteLeaf:function(){}...

}; // eof: com.element.oimo.physics.collision.broadphase.dbvt.DBVT

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.OimoPhysics
// maybe goes with  com/element/oimo/physics/OimoPhysics.js
}; // eof: com.element.oimo.physics.OimoPhysics

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.of
// maybe goes with  ../../src/dev/constraint/of.js
/**
 * The base class of all type of the constraints.
 * @author saharan
 */
OIMO.Constraint=function(...){}
OIMO.Constraint.prototype={
	/**
	 * The parent world of the constraint.
	 */
	this.parent=...

	/**
	 * The first body of the constraint.
	 */
	this.body1=...

	/**
	 * The second body of the constraint.
	 */
	this.body2=...

	/**
	 * Internal
	 */
	this.addedToIsland=...

	/**
	 * Prepare for solving the constraint.
	 * @paramtimeStep
	 * @paraminvTimeStep
	 */
	preSolve:function(){}...

	/**
	 * Solve the constraint.
	 * This is usually called iteratively.
	 */
	solve:function(){}...

	/**
	 * Do the post-processing.
	 */
	postSolve:function(){}...

}; // eof: com.element.oimo.physics.constraint.of

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.PyramidDemo
// maybe goes with  ../../src/dev/demo/PyramidDemo.js
/**
 * ...
 * @author saharan
 */
OIMO.PyramidDemo=function(...){}
OIMO.PyramidDemo.prototype={
}; // eof: com.element.oimo.physics.demo.PyramidDemo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.BasicDemo
// maybe goes with  ../../src/dev/demo/BasicDemo.js
/**
 * ...
 * @author saharan
 */
OIMO.BasicDemo=function(...){}
OIMO.BasicDemo.prototype={
}; // eof: com.element.oimo.physics.demo.BasicDemo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.VehicleDemo
// maybe goes with  ../../src/dev/demo/VehicleDemo.js
/**
 * ...
 * @author saharan
 */
OIMO.VehicleDemo=function(...){}
OIMO.VehicleDemo.prototype={
}; // eof: com.element.oimo.physics.demo.VehicleDemo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.ShapesDemo
// maybe goes with  ../../src/dev/demo/ShapesDemo.js
/**
 * ...
 * @author saharan
 */
OIMO.ShapesDemo=function(...){}
OIMO.ShapesDemo.prototype={
}; // eof: com.element.oimo.physics.demo.ShapesDemo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.BridgeDemo
// maybe goes with  ../../src/dev/demo/BridgeDemo.js
/**
 * ...
 * @author saharan
 */
OIMO.BridgeDemo=function(...){}
OIMO.BridgeDemo.prototype={
}; // eof: com.element.oimo.physics.demo.BridgeDemo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.HingeJointDemo
// maybe goes with  ../../src/dev/demo/HingeJointDemo.js
/**
 * ...
 * @author saharan
 */
OIMO.HingeJointDemo=function(...){}
OIMO.HingeJointDemo.prototype={
}; // eof: com.element.oimo.physics.demo.HingeJointDemo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.FrictionDemo
// maybe goes with  ../../src/dev/demo/FrictionDemo.js
/**
 * ...
 * @author saharan
 */
OIMO.FrictionDemo=function(...){}
OIMO.FrictionDemo.prototype={
}; // eof: com.element.oimo.physics.demo.FrictionDemo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.BallAndSocketJointDemo
// maybe goes with  ../../src/dev/demo/BallAndSocketJointDemo.js
/**
 * ...
 * @author saharan
 */
OIMO.BallAndSocketJointDemo=function(...){}
OIMO.BallAndSocketJointDemo.prototype={
}; // eof: com.element.oimo.physics.demo.BallAndSocketJointDemo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.OimoPhysicsDemos
// maybe goes with  ../../src/dev/demo/OimoPhysicsDemos.js
}; // eof: com.element.oimo.physics.demo.OimoPhysicsDemos

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.RestitutionDemo
// maybe goes with  ../../src/dev/demo/RestitutionDemo.js
/**
 * ...
 * @author saharan
 */
OIMO.RestitutionDemo=function(...){}
OIMO.RestitutionDemo.prototype={
}; // eof: com.element.oimo.physics.demo.RestitutionDemo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.DistanceJointDemo
// maybe goes with  ../../src/dev/demo/DistanceJointDemo.js
/**
 * ...
 * @author saharan
 */
OIMO.DistanceJointDemo=function(...){}
OIMO.DistanceJointDemo.prototype={
}; // eof: com.element.oimo.physics.demo.DistanceJointDemo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.DemoBase
// maybe goes with  ../../src/dev/demo/DemoBase.js
/**
 * ...
 * @author saharan
 */
OIMO.DemoBase=function(...){}
OIMO.DemoBase.prototype={
}; // eof: com.element.oimo.physics.demo.DemoBase

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.demo.CollisionFilteringDemo
// maybe goes with  ../../src/dev/demo/CollisionFilteringDemo.js
/**
 * ...
 * @author saharan
 */
OIMO.CollisionFilteringDemo=function(...){}
OIMO.CollisionFilteringDemo.prototype={
}; // eof: com.element.oimo.physics.demo.CollisionFilteringDemo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.util.DebugDraw
// maybe goes with  ../../src/dev/util/DebugDraw.js
/**
 * Simple world renderer
 */
OIMO.DebugDraw=function(...){}
OIMO.DebugDraw.prototype={
	/**
	 * Render the world.
	 */
	render:function(){}...

}; // eof: com.element.oimo.physics.util.DebugDraw

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.util.Performance
// maybe goes with  ../../src/dev/util/Performance.js
/**
 * ワールドが物理演算に要した時間などを記録するクラスです。
 * 特に表記がない場合、時間の単位はミリ秒です。
 * @author saharan
 */
OIMO.Performance=function(...){}
OIMO.Performance.prototype={
	/**
	 * 広域衝突判定に要した時間です。
	 */
	this.broadPhaseTime=...

	/**
	 * 詳細な衝突判定に要した時間です。
	 */
	this.narrowPhaseTime=...

	/**
	 * 拘束や積分の計算に要した時間です。
	 */
	this.solvingTime=...

	/**
	 * その他の更新に要した時間です。
	 */
	this.updatingTime=...

	/**
	 * ステップ計算に要した合計時間です。
	 */
	this.totalTime=...

	/**
	 * 新しく Performance オブジェクトを作成します。
	 */
	Performance:function(){}...

}; // eof: com.element.oimo.physics.util.Performance

///////////////////////////////////////////////////////////////
// com.element.oimo.math.Vec3
// maybe goes with  com/element/oimo/math/Vec3.js
/**
 * A 3D vector. This supports three-dimansional vector operations.
 * @author saharan
 */
OIMO.Vec3=function(...){}
OIMO.Vec3.prototype={
	/**
	 * Constructor.
	 * If the parameters are empty, the vector will be set to the zero vector.
	 * @paramx
	 * @paramy
	 * @paramz
	 */
	Vec3:function(){}...

	/**
	 * Initialize the vector.
	 * If the parameters are empty, the vector will be set to the zero vector.
	 * @paramx
	 * @paramy
	 * @paramz
	 * @return
	 */
	init:function(){}...

	/**
	 * this = v1 + v2
	 * @paramv1
	 * @paramv2
	 * @return
	 */
	add:function(){}...

	/**
	 * this = this + v
	 * @paramv
	 * @return
	 */
	addEqual:function(){}...

	/**
	 * this = v1 - v2
	 * @paramv1
	 * @paramv2
	 * @return
	 */
	sub:function(){}...

	/**
	 * this = this - v
	 * @paramv
	 * @return
	 */
	subEqual:function(){}...

	/**
	 * this = v * s
	 * @paramv
	 * @params
	 * @return
	 */
	scale:function(){}...

	/**
	 * this = this * s
	 * @params
	 * @return
	 */
	scaleEqual:function(){}...

	/**
	 * Get the dot production of this vector and v.
	 * @paramv
	 * @return
	 */
	dot:function(){}...

	/**
	 * Set this vector to the cross product of v1 and v2.
	 * @paramv1
	 * @paramv2
	 * @return
	 */
	cross:function(){}...

	/**
	 * this = m * v
	 * @paramm
	 * @paramv
	 * @return
	 */
	mulMat:function(){}...

	/**
	 * Set this vector to the normalized vector of v.
	 * @paramv
	 * @return
	 */
	normalize:function(){}...

	/**
	 * this = -v
	 * @paramv
	 * @return
	 */
	invert:function(){}...

	/**
	 * Get the length of the vector.
	 * @return
	 */
	length:function(){}...

	/**
	 * this = v
	 * @paramv
	 * @return
	 */
	copy:function(){}...

	/**
	 * Get the clone of the vector.
	 * @return
	 */
	clone:function(){}...

	/**
	 * Get the string of the vector.
	 * @return
	 */
	toString:function(){}...

}; // eof: com.element.oimo.math.Vec3

///////////////////////////////////////////////////////////////
// com.element.oimo.math.Mat33
// maybe goes with  com/element/oimo/math/Mat33.js
/**
 * A 3x3 matrix. This supports rotation, skewing, and scaling transformations.
 * @author saharan
 */
OIMO.Mat33=function(...){}
OIMO.Mat33.prototype={
	/**
	 * Constructor.
	 * If the parameters are empty, the matrix will be set to the itentity matrix.
	 * @parame00
	 * @parame01
	 * @parame02
	 * @parame10
	 * @parame11
	 * @parame12
	 * @parame20
	 * @parame21
	 * @parame22
	 */
	Mat33:function(){}...

	/**
	 * Initialize the matrix.
	 * If the parameters are empty, the matrix will be set to the itentity matrix.
	 * @parame00
	 * @parame01
	 * @parame02
	 * @parame10
	 * @parame11
	 * @parame12
	 * @parame20
	 * @parame21
	 * @parame22
	 * @return
	 */
	init:function(){}...

	/**
	 * this = m1 + m2
	 * @paramm1
	 * @paramm2
	 * @return
	 */
	add:function(){}...

	/**
	 * this = this + m
	 * @paramm
	 * @return
	 */
	addEqual:function(){}...

	/**
	 * this = m1 - m2
	 * @paramm1
	 * @paramm2
	 * @return
	 */
	sub:function(){}...

	/**
	 * this = this - m
	 * @paramm
	 * @return
	 */
	subEqual:function(){}...

	/**
	 * this = m * s
	 * @paramm
	 * @params
	 * @return
	 */
	scale:function(){}...

	/**
	 * this = this * s
	 * @params
	 * @return
	 */
	scaleEqual:function(){}...

	/**
	 * this = m1 * m2
	 * @paramm1
	 * @paramm2
	 * @return
	 */
	mul:function(){}...

	/**
	 * Set this matrix to the multiplication of m and scaling matrix.
	 * this = [scaling matrix] * m (prepend == true)
	 * this = m * [scaling matrix] (prepend == false)
	 * @paramm
	 * @paramsx 
	 * @paramsy
	 * @paramsz
	 * @paramprepend
	 * @return
	 */
	mulScale:function(){}...

	/**
	 * Set this matrix to the multiplication of m and rotation matrix.
	 * this = [rotation matrix] * m (prepend == true)
	 * this = m * [rotation matrix] (prepend == false)
	 * @paramm
	 * @paramrad
	 * @paramax
	 * @paramay
	 * @paramaz
	 * @paramprepend
	 * @return
	 */
	mulRotate:function(){}...

	/**
	 * Set this matrix to the transposed matrix of m.
	 * @paramm
	 * @return
	 */
	transpose:function(){}...

	/**
	 * Set this matrix to the rotation matrix of q.
	 * @paramq
	 * @return
	 */
	setQuat:function(){}...

	/**
	 * this = m ^ -1
	 * @paramm
	 * @return
	 */
	invert:function(){}...

	/**
	 * this = m
	 * @paramm
	 * @return
	 */
	copy:function(){}...

	/**
	 * this = m
	 * @paramm
	 * @return
	 */
	copyMat44:function(){}...

	/**
	 * Get the clone of the matrix.
	 * @return
	 */
	clone:function(){}...

	/**
	 * Get the string of the matrix.
	 * @return
	 */
	toString:function(){}...

}; // eof: com.element.oimo.math.Mat33

///////////////////////////////////////////////////////////////
// com.element.oimo.math.Mat44
// maybe goes with  com/element/oimo/math/Mat44.js
/**
 * A 4x4 matrix. This supports three-dimentional transformations perfectly.
 * @author saharan
 */
OIMO.Mat44=function(...){}
OIMO.Mat44.prototype={
	/**
	 * Constructor.
	 * If the parameters are empty, the matrix will be set to the identity matrix.
	 * @parame00
	 * @parame01
	 * @parame02
	 * @parame03
	 * @parame10
	 * @parame11
	 * @parame12
	 * @parame13
	 * @parame20
	 * @parame21
	 * @parame22
	 * @parame23
	 * @parame30
	 * @parame31
	 * @parame32
	 * @parame33
	 */
	Mat44:function(){}...

	/**
	 * Initialize the matrix.
	 * If the parameters are empty, the matrix will be set to the identity matrix.
	 * @parame00
	 * @parame01
	 * @parame02
	 * @parame03
	 * @parame10
	 * @parame11
	 * @parame12
	 * @parame13
	 * @parame20
	 * @parame21
	 * @parame22
	 * @parame23
	 * @parame30
	 * @parame31
	 * @parame32
	 * @parame33
	 * @return
	 */
	init:function(){}...

	/**
	 * this = m1 + m2
	 * @paramm1
	 * @paramm2
	 * @return
	 */
	add:function(){}...

	/**
	 * this = m1 - m2
	 * @paramm1
	 * @paramm2
	 * @return
	 */
	sub:function(){}...

	/**
	 * this = m * s
	 * @paramm
	 * @params
	 * @return
	 */
	scale:function(){}...

	/**
	 * this = m1 * m2
	 * @paramm1
	 * @paramm2
	 * @return
	 */
	mul:function(){}...

	/**
	 * Set this matrix to the multiplication of m and scaling matrix.
	 * this = [scaling matrix] * m (prepend == true)
	 * this = m * [scaling matrix] (prepend == false)
	 * @paramm
	 * @paramsx 
	 * @paramsy
	 * @paramsz
	 * @paramprepend
	 * @return
	 */
	mulScale:function(){}...

	/**
	 * Set this matrix to the multiplication of m and rotation matrix.
	 * this = [rotation matrix] * m (prepend == true)
	 * this = m * [rotation matrix] (prepend == false)
	 * @paramm
	 * @paramrad
	 * @paramax
	 * @paramay
	 * @paramaz
	 * @paramprepend
	 * @return
	 */
	mulRotate:function(){}...

	/**
	 * Set this matrix to the multiplication of m and translation matrix.
	 * this = [translation matrix] * m (prepend == true)
	 * this = m * [translation matrix] (prepend == false)
	 * @paramm
	 * @paramtx
	 * @paramty
	 * @paramtz
	 * @paramprepend
	 * @return
	 */
	mulTranslate:function(){}...

	/**
	 * Set this matrix to the transposed matrix of m.
	 * @paramm
	 * @return
	 */
	transpose:function(){}...

	/**
	 * Set this matrix to the rotation matrix of q.
	 * @paramq
	 * @return
	 */
	setQuat:function(){}...

	/**
	 * this = m ^ -1
	 * @paramm
	 * @return
	 */
	invert:function(){}...

	/**
	 * Set the matrix to right-handed view matrix.
	 * @parameyeX
	 * @parameyeY
	 * @parameyeZ
	 * @paramatX 
	 * @paramatY
	 * @paramatZ
	 * @paramupX
	 * @paramupY
	 * @paramupZ
	 * @return
	 */
	lookAt:function(){}...

	/**
	 * Set the matrix to the right-handed perspective projection matrix.
	 * @paramfovY
	 * @paramaspect
	 * @paramnear
	 * @paramfar
	 * @return
	 */
	perspective:function(){}...

	/**
	 * Set the matrix to the right-handed orthogonal projection matrix.
	 * @paramwidth
	 * @paramheight
	 * @paramnear
	 * @paramfar
	 * @return
	 */
	ortho:function(){}...

	/**
	 * this = m
	 * @paramm
	 * @return
	 */
	copy:function(){}...

	/**
	 * this = m
	 * @paramm
	 * @return
	 */
	copyMat33:function(){}...

	/**
	 * Get the clone of the matrix.
	 * @return
	 */
	clone:function(){}...

	/**
	 * Get the string of the matrix.
	 * @return
	 */
	toString:function(){}...

}; // eof: com.element.oimo.math.Mat44

///////////////////////////////////////////////////////////////
// com.element.oimo.math.Quat
// maybe goes with  com/element/oimo/math/Quat.js
/**
 * A quaternion. This is used to represent three-dimansional orientations of rigid bodies.
 * @author saharan
 */
OIMO.Quat=function(...){}
OIMO.Quat.prototype={
	/**
	 * Constructor.
	 * If the parameters are empty, the quaternion will be set to the identity quaternion.
	 * @params
	 * @paramx
	 * @paramy
	 * @paramz
	 */
	Quat:function(){}...

	/**
	 * Initialize the quaternion.
	 * If the parameters are empty, the quaternion will be set to the identity quaternion.
	 * @params
	 * @paramx
	 * @paramy
	 * @paramz
	 * @return
	 */
	init:function(){}...

	/**
	 * this = q1 + q2
	 * @paramq1
	 * @paramq2
	 * @return
	 */
	add:function(){}...

	/**
	 * this = q1 - q2
	 * @paramq1
	 * @paramq2
	 * @return
	 */
	sub:function(){}...

	/**
	 * this = q * s
	 * @paramq
	 * @params
	 * @return
	 */
	scale:function(){}...

	/**
	 * this = q1 * q2
	 * @paramq1
	 * @paramq2
	 * @return
	 */
	mul:function(){}...

	/**
	 * Set this quaternion to the shortest arc rotation quaternion.
	 * Note that v1 and v2 must be normalized.
	 * @paramv1 from
	 * @paramv2 to
	 * @return
	 */
	arc:function(){}...

	/**
	 * Set this quaternion to the normalized quaternion of q.
	 * @paramq
	 * @return
	 */
	normalize:function(){}...

	/**
	 * this = -q
	 * @paramq
	 * @return
	 */
	invert:function(){}...

	/**
	 * Get the length of the quaternion.
	 * @return
	 */
	length:function(){}...

	/**
	 * this = q
	 * @paramq
	 * @return
	 */
	copy:function(){}...

	/**
	 * Get the clone of the quaternion.
	 * @return
	 */
	clone:function(){}...

	/**
	 * Get the string of the quaternion.
	 * @return
	 */
	toString:function(){}...

}; // eof: com.element.oimo.math.Quat

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.sap.SAPBroadPhase
// maybe goes with  ../../src/dev/collision/broadphase/sap/SAPBroadPhase.js
/**
 * A broad-phase collision detection algorithm using sweep and prune.
 * @author saharan
 */
OIMO.SAPBroadPhase=function(...){}
OIMO.SAPBroadPhase.prototype={
	/**
	 * @inheritDoc
	 */
	addProxy:function(){}...

	/**
	 * @inheritDoc
	 */
	removeProxy:function(){}...

}; // eof: com.element.oimo.physics.collision.broadphase.sap.SAPBroadPhase

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.sap.SAPAxis
// maybe goes with  ../../src/dev/collision/broadphase/sap/SAPAxis.js
/**
 * A projection axis for sweep and prune broad-phase.
 * @author saharan
 */
OIMO.SAPAxis=function(...){}
OIMO.SAPAxis.prototype={
}; // eof: com.element.oimo.physics.collision.broadphase.sap.SAPAxis

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.sap.SAPProxy
// maybe goes with  ../../src/dev/collision/broadphase/sap/SAPProxy.js
/**
 * A proxy for sweep and prune broad-phase.
 * @author saharan
 */
OIMO.SAPProxy=function(...){}
OIMO.SAPProxy.prototype={
	/**
	 * Type of the axis to which the proxy belongs to. [0:none, 1:dynamic, 2:static]
	 */
	this.belongsTo=...

	/**
	 * Returns whether the proxy is dynamic or not.
	 * @return
	 */
	isDynamic:function(){}...

	/**
	 * @inheritDoc
	 */
	update:function(){}...

}; // eof: com.element.oimo.physics.collision.broadphase.sap.SAPProxy

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.sap.SAPElement
// maybe goes with  ../../src/dev/collision/broadphase/sap/SAPElement.js
/**
 * An element of proxies.
 * @author saharan
 */
OIMO.SAPElement=function(...){}
OIMO.SAPElement.prototype={
	/**
	 * The parent proxy.
	 */
	this.proxy=...

	/**
	 * The pair element.
	 */
	this.pair=...

	/**
	 * The value of the element.
	 */
	this.value=...

	/**
	 * Whether the element has maximum value or not.
	 */
	this.max=...

	/**
	 * The minimum element on other axis.
	 */
	this.min1=...

	/**
	 * The maximum element on other axis.
	 */
	this.max1=...

	/**
	 * The minimum element on other axis.
	 */
	this.min2=...

	/**
	 * The maximum element on other axis.
	 */
	this.max2=...

}; // eof: com.element.oimo.physics.collision.broadphase.sap.SAPElement

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.contact.Contact
// maybe goes with  ../../src/dev/constraint/contact/Contact.js
/**
 * A contact is a pair of shapes whose axis-aligned bounding boxes are overlapping.
 * @author saharan
 */
OIMO.Contact=function(...){}
OIMO.Contact.prototype={
	/**
	 * The first shape.
	 */
	this.shape1=...

	/**
	 * The second shape.
	 */
	this.shape2=...

	/**
	 * The first rigid body.
	 */
	this.body1=...

	/**
	 * The second rigid body.
	 */
	this.body2=...

	/**
	 * The previous contact in the world.
	 */
	this.prev=...

	/**
	 * The next contact in the world.
	 */
	this.next=...

	/**
	 * Internal
	 */
	this.persisting=...

	/**
	 * Whether both the rigid bodies are sleeping or not.
	 */
	this.sleeping=...

	/**
	 * The collision detector between two shapes.
	 */
	this.detector=...

	/**
	 * The contact manifold of the contact.
	 */
	this.manifold=...

	/**
	 * The contact constraint of the contact.
	 */
	this.constraint=...

	/**
	 * Whether the shapes are touching or not.
	 */
	this.touching=...

	/**
	 * Update the contact manifold.
	 */
	updateManifold:function(){}...

	/**
	 * Attach the contact to the shapes.
	 * @paramshape1
	 * @paramshape2
	 */
	attach:function(){}...

	/**
	 * Detach the contact from the shapes.
	 */
	detach:function(){}...

}; // eof: com.element.oimo.physics.constraint.contact.Contact

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.contact.holds
// maybe goes with  ../../src/dev/constraint/contact/holds.js
/**
 * The class holds details of the contact point.
 * @author saharan
 */
OIMO.ManifoldPoint=function(...){}
OIMO.ManifoldPoint.prototype={
	/**
	 * The position of this manifold point.
	 */
	this.position=...

	/**
	 * The position in the first shape's coordinate.
	 */
	this.localPoint1=...

	/**
	 * The position in the second shape's coordinate.
	 */
	this.localPoint2=...

	/**
	 * The normal vector of this manifold point.
	 */
	this.normal=...

	/**
	 * The tangent vector of this manifold point.
	 */
	this.tangent=...

	/**
	 * The binormal vector of this manifold point.
	 */
	this.binormal=...

	/**
	 * The impulse in normal direction.
	 */
	this.normalImpulse=...

	/**
	 * The impulse in tangent direction.
	 */
	this.tangentImpulse=...

	/**
	 * The impulse in binormal direction.
	 */
	this.binormalImpulse=...

	/**
	 * The denominator in normal direction.
	 */
	this.normalDenominator=...

	/**
	 * The denominator in tangent direction.
	 */
	this.tangentDenominator=...

	/**
	 * The denominator in binormal direction.
	 */
	this.binormalDenominator=...

	/**
	 * Whether this manifold point is persisting or not.
	 */
	this.warmStarted=...

	/**
	 * The depth of penetration.
	 */
	this.penetration=...

}; // eof: com.element.oimo.physics.constraint.contact.holds

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.contact.ContactConstraint
// maybe goes with  ../../src/dev/constraint/contact/ContactConstraint.js
/**
 * ...
 * @author saharan
 */
OIMO.ContactConstraint=function(...){}
OIMO.ContactConstraint.prototype={
	/**
	 * The contact manifold of the constraint.
	 */
	this.manifold=...

	/**
	 * The coefficient of restitution of the constraint.
	 */
	this.restitution=...

	/**
	 * The coefficient of friction of the constraint.
	 */
	this.friction=...

	/**
	 * Attach the constraint to the bodies.
	 */
	attach:function(){}...

	/**
	 * Detach the constraint from the bodies.
	 */
	detach:function(){}...

	/**
	 * @inheritDoc
	 */
	preSolve:function(){}...

	/**
	 * @inheritDoc
	 */
	solve:function(){}...

	/**
	 * @inheritDoc
	 */
	postSolve:function(){}...

}; // eof: com.element.oimo.physics.constraint.contact.ContactConstraint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.contact.ContactManifold
// maybe goes with  ../../src/dev/constraint/contact/ContactManifold.js
/**
 * A contact manifold between two shapes.
 * @author saharan
 */
OIMO.ContactManifold=function(...){}
OIMO.ContactManifold.prototype={
	/**
	 * The first rigid body.
	 */
	this.body1=...

	/**
	 * The second rigid body.
	 */
	this.body2=...

	/**
	 * The manifold points.
	 */
	this.points=...

	/**
	 * The number of manifold points.
	 */
	this.numPoints=...

	/**
	 * Reset the manifold.
	 * @paramshape1
	 * @paramshape2
	 */
	reset:function(){}...

	/**
	 * Add a point into this manifold.
	 * @paramx
	 * @paramy
	 * @paramz
	 * @paramnormalX
	 * @paramnormalY
	 * @paramnormalZ
	 * @parampenetration
	 * @paramflip
	 */
	addPoint:function(){}...

}; // eof: com.element.oimo.physics.constraint.contact.ContactManifold

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.contact.ContactPointDataBuffer
// maybe goes with  ../../src/dev/constraint/contact/ContactPointDataBuffer.js
}; // eof: com.element.oimo.physics.constraint.contact.ContactPointDataBuffer

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.contact.ImpulseDataBuffer
// maybe goes with  ../../src/dev/constraint/contact/ImpulseDataBuffer.js
}; // eof: com.element.oimo.physics.constraint.contact.ImpulseDataBuffer

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.contact.ContactLink
// maybe goes with  ../../src/dev/constraint/contact/ContactLink.js
/**
 * A link list of contacts.
 * @author saharan
 */
OIMO.ContactLink=function(...){}
OIMO.ContactLink.prototype={
	/**
	 * The previous contact link.
	 */
	this.prev=...

	/**
	 * The next contact link.
	 */
	this.next=...

	/**
	 * The shape of the contact.
	 */
	this.shape=...

	/**
	 * The other rigid body.
	 */
	this.body=...

	/**
	 * The contact of the link.
	 */
	this.contact=...

}; // eof: com.element.oimo.physics.constraint.contact.ContactLink

///////////////////////////////////////////////////////////////
// com.element.oimo.glmini.OimoGLMini
// maybe goes with  com/element/oimo/glmini/OimoGLMini.js
/**
 * A simple 3d engine.
 * @author saharan
 */
OIMO.OimoGLMini=function(...){}
OIMO.OimoGLMini.prototype={
}; // eof: com.element.oimo.glmini.OimoGLMini

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.Proxy
// maybe goes with  ../../src/dev/collision/broadphase/Proxy.js
/**
 * A proxy is used for broad-phase collecting pairs that can be colliding.
 */
OIMO.Proxy=function(...){}
OIMO.Proxy.prototype={
	/**
	 * The parent shape.
	 */
	this.shape=...

	/**
	 * The axis-aligned bounding box.
	 */
	this.aabb=...

	/**
	 * Update the proxy.
	 */
	update:function(){}...

}; // eof: com.element.oimo.physics.collision.broadphase.Proxy

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.BasicProxy
// maybe goes with  ../../src/dev/collision/broadphase/BasicProxy.js
/**
 * A basic implementation of proxies.
 * @author saharan
 */
OIMO.BasicProxy=function(...){}
OIMO.BasicProxy.prototype={
	/**
	 * @inheritDoc
	 */
	update:function(){}...

}; // eof: com.element.oimo.physics.collision.broadphase.BasicProxy

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.Pair
// maybe goes with  ../../src/dev/collision/broadphase/Pair.js
/**
 * A pair of shapes that may collide.
 * @author saharan
 */
OIMO.Pair=function(...){}
OIMO.Pair.prototype={
	/**
	 * The first shape.
	 */
	this.shape1=...

	/**
	 * The second shape.
	 */
	this.shape2=...

}; // eof: com.element.oimo.physics.collision.broadphase.Pair

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.BroadPhase
// maybe goes with  ../../src/dev/collision/broadphase/BroadPhase.js
/**
 * The broad-phase is used for collecting all possible pairs for collision.
 */
OIMO.BroadPhase=function(...){}
OIMO.BroadPhase.prototype={
	/**
	 * The pairs whose proxies are overlapping.
	 */
	this.pairs=...

	/**
	 * The number of pairs.
	 */
	this.numPairs=...

	/**
	 * The number of pair checks.
	 */
	this.numPairChecks=...

	/**
	 * Create a new proxy.
	 * @paramshape
	 * @return
	 */
	createProxy:function(){}...

	/**
	 * Add the proxy into the broad-phase.
	 * @paramproxy
	 */
	addProxy:function(){}...

	/**
	 * Remove the proxy from the broad-phase.
	 * @paramproxy
	 */
	removeProxy:function(){}...

	/**
	 * Returns whether the pair is available or not.
	 * @params1
	 * @params2
	 * @return
	 */
	isAvailablePair:function(){}...

	/**
	 * Detect overlapping pairs.
	 */
	detectPairs:function(){}...

}; // eof: com.element.oimo.physics.collision.broadphase.BroadPhase

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.BruteForceBroadPhase
// maybe goes with  ../../src/dev/collision/broadphase/BruteForceBroadPhase.js
/**
 * A broad-phase algorithm with brute-force search.
 * This always checks for all possible pairs.
 */
OIMO.BruteForceBroadPhase=function(...){}
OIMO.BruteForceBroadPhase.prototype={
	/**
	 * @inheritDoc
	 */
	createProxy:function(){}...

	/**
	 * @inheritDoc
	 */
	addProxy:function(){}...

	/**
	 * @inheritDoc
	 */
	removeProxy:function(){}...

}; // eof: com.element.oimo.physics.collision.broadphase.BruteForceBroadPhase

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broadphase.AABB
// maybe goes with  ../../src/dev/collision/broadphase/AABB.js
/**
 * An axis-aligned bounding box.
 * @author saharan
 */
OIMO.AABB=function(...){}
OIMO.AABB.prototype={
	/**
	 * Set this AABB to the combined AABB of aabb1 and aabb2.
	 * @paramaabb1
	 * @paramaabb2
	 */
	combine:function(){}...

	/**
	 * Get the surface area.
	 * @return
	 */
	surfaceArea:function(){}...

	/**
	 * Get whether the AABB intersects with the point or not.
	 * @paramx
	 * @paramy
	 * @paramz
	 * @return
	 */
	intersectsWithPoint:function(){}...

}; // eof: com.element.oimo.physics.collision.broadphase.AABB

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.base.TranslationalConstraint
// maybe goes with  ../../src/dev/constraint/joint/base/TranslationalConstraint.js
/**
 * A translational constraint for various joints.
 * @author saharan
 */
OIMO.TranslationalConstraint=function(...){}
OIMO.TranslationalConstraint.prototype={
}; // eof: com.element.oimo.physics.constraint.joint.base.TranslationalConstraint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.base.LinearConstraint
// maybe goes with  ../../src/dev/constraint/joint/base/LinearConstraint.js
/**
 * A linear constraint for all axes for various joints.
 * @author saharan
 */
OIMO.LinearConstraint=function(...){}
OIMO.LinearConstraint.prototype={
}; // eof: com.element.oimo.physics.constraint.joint.base.LinearConstraint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.base.Translational3Constraint
// maybe goes with  ../../src/dev/constraint/joint/base/Translational3Constraint.js
/**
 * A three-axis translational constraint for various joints.
 * @author saharan
 */
OIMO.Translational3Constraint=function(...){}
OIMO.Translational3Constraint.prototype={
}; // eof: com.element.oimo.physics.constraint.joint.base.Translational3Constraint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.base.RotationalConstraint
// maybe goes with  ../../src/dev/constraint/joint/base/RotationalConstraint.js
/**
 * A rotational constraint for various joints.
 * @author saharan
 */
OIMO.RotationalConstraint=function(...){}
OIMO.RotationalConstraint.prototype={
}; // eof: com.element.oimo.physics.constraint.joint.base.RotationalConstraint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.base.Rotational3Constraint
// maybe goes with  ../../src/dev/constraint/joint/base/Rotational3Constraint.js
/**
 * A three-axis rotational constraint for various joints.
 * @author saharan
 */
OIMO.Rotational3Constraint=function(...){}
OIMO.Rotational3Constraint.prototype={
}; // eof: com.element.oimo.physics.constraint.joint.base.Rotational3Constraint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.base.AngularConstraint
// maybe goes with  ../../src/dev/constraint/joint/base/AngularConstraint.js
/**
 * An angular constraint for all axes for various joints.
 * @author saharan
 */
OIMO.AngularConstraint=function(...){}
OIMO.AngularConstraint.prototype={
}; // eof: com.element.oimo.physics.constraint.joint.base.AngularConstraint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.BallAndSocketJoint
// maybe goes with  ../../src/dev/constraint/joint/BallAndSocketJoint.js
/**
 * A ball-and-socket joint limits relative translation on two anchor points on rigid bodies.
 * @author saharan
 */
OIMO.BallAndSocketJoint=function(...){}
OIMO.BallAndSocketJoint.prototype={
	/**
	 * @inheritDoc
	 */
	preSolve:function(){}...

	/**
	 * @inheritDoc
	 */
	solve:function(){}...

	/**
	 * @inheritDoc
	 */
	postSolve:function(){}...

}; // eof: com.element.oimo.physics.constraint.joint.BallAndSocketJoint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.Joint
// maybe goes with  ../../src/dev/constraint/joint/Joint.js
/**
 * Joints are used to constrain the motion between two rigid bodies.
 * @author saharan
 */
OIMO.Joint=function(...){}
OIMO.Joint.prototype={
	/**
	 * The type of the joint.
	 */
	this.type=...

	/**
	 * Whether allow collision between connected rigid bodies or not.
	 */
	this.allowCollision=...

	/**
	 * The anchor point on the first rigid body in local coordinate system.
	 */
	this.localAnchorPoint1=...

	/**
	 * The anchor point on the second rigid body in local coordinate system.
	 */
	this.localAnchorPoint2=...

	/**
	 * The anchor point on the first rigid body in world coordinate system relative to the body's origin.
	 */
	this.relativeAnchorPoint1=...

	/**
	 * The anchor point on the second rigid body in world coordinate system relative to the body's origin.
	 */
	this.relativeAnchorPoint2=...

	/**
	 * The anchor point on the first rigid body in world coordinate system.
	 */
	this.anchorPoint1=...

	/**
	 * The anchor point on the second rigid body in world coordinate system.
	 */
	this.anchorPoint2=...

	/**
	 * The previous joint in the world.
	 */
	this.prev=...

	/**
	 * The next joint in the world.
	 */
	this.next=...

	/**
	 * Update all the anchor points.
	 */
	updateAnchorPoints:function(){}...

	/**
	 * Attach the joint to the bodies.
	 */
	attach:function(){}...

	/**
	 * Attach the joint from the bodies.
	 */
	detach:function(){}...

	/**
	 * Awake the bodies.
	 */
	awake:function(){}...

	/**
	 * @inheritDoc
	 */
	preSolve:function(){}...

	/**
	 * @inheritDoc
	 */
	solve:function(){}...

	/**
	 * @inheritDoc
	 */
	postSolve:function(){}...

}; // eof: com.element.oimo.physics.constraint.joint.Joint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.SliderJoint
// maybe goes with  ../../src/dev/constraint/joint/SliderJoint.js
/**
 * A slider joint allows for relative translation and relative rotation between two rigid bodies along the axis.
 * @author saharan
 */
OIMO.SliderJoint=function(...){}
OIMO.SliderJoint.prototype={
	/**
	 * The first axis in local coordinate system.
	 */
	this.localAxis1=...

	/**
	 * The second axis in local coordinate system.
	 */
	this.localAxis2=...

	/**
	 * The limit and motor for the rotation.
	 */
	this.rotationalLimitMotor=...

	/**
	 * The limit and motor for the translation.
	 */
	this.translationalLimitMotor=...

	/**
	 * @inheritDoc
	 */
	preSolve:function(){}...

	/**
	 * @inheritDoc
	 */
	solve:function(){}...

	/**
	 * @inheritDoc
	 */
	postSolve:function(){}...

}; // eof: com.element.oimo.physics.constraint.joint.SliderJoint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.PrismaticJoint
// maybe goes with  ../../src/dev/constraint/joint/PrismaticJoint.js
/**
 * A prismatic joint allows only for relative translation of rigid bodies along the axis.
 * @author saharan
 */
OIMO.PrismaticJoint=function(...){}
OIMO.PrismaticJoint.prototype={
	/**
	 * The axis in the first body's coordinate system.
	 */
	this.localAxis1=...

	/**
	 * The axis in the second body's coordinate system.
	 */
	this.localAxis2=...

	/**
	 * The translational limit and motor information of the joint.
	 */
	this.limitMotor=...

	/**
	 * @inheritDoc
	 */
	preSolve:function(){}...

	/**
	 * @inheritDoc
	 */
	solve:function(){}...

	/**
	 * @inheritDoc
	 */
	postSolve:function(){}...

}; // eof: com.element.oimo.physics.constraint.joint.PrismaticJoint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.JointConfig
// maybe goes with  ../../src/dev/constraint/joint/JointConfig.js
/**
 * A joint configuration holds all configuration data for constructing a joint.
 * Joint configurations can be reused safely.
 * @author saharan
 */
OIMO.JointConfig=function(...){}
OIMO.JointConfig.prototype={
	/**
	 * The first rigid body of the joint.
	 */
	this.body1=...

	/**
	 * The second rigid body of the joint.
	 */
	this.body2=...

	/**
	 * The anchor point on the first rigid body in local coordinate system.
	 */
	this.localAnchorPoint1=...

	/**
	 * The anchor point on the second rigid body in local coordinate system.
	 */
	this.localAnchorPoint2=...

	/**
	 * The axis in the first body's coordinate system.
	 * This property is available in some joints.
	 */
	this.localAxis1=...

	/**
	 * The axis in the second body's coordinate system.
	 * This property is available in some joints.
	 */
	this.localAxis2=...

	/**
	 * Whether allow collision between connected rigid bodies or not.
	 */
	this.allowCollision=...

}; // eof: com.element.oimo.physics.constraint.joint.JointConfig

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.LimitMotor
// maybe goes with  ../../src/dev/constraint/joint/LimitMotor.js
/**
 * An information of limit and motor.
 * @author saharan
 */
OIMO.LimitMotor=function(...){}
OIMO.LimitMotor.prototype={
	/**
	 * The current angle for rotational constraints.
	 */
	this.angle=...

	/**
	 * The axis of the constraint.
	 */
	this.axis=...

	/**
	 * The lower limit. Set lower > upper to disable.
	 */
	this.lowerLimit=...

	/**
	 * The upper limit. Set lower > upper to disable.
	 */
	this.upperLimit=...

	/**
	 * The target motor speed.
	 */
	this.motorSpeed=...

	/**
	 * The maximum motor force or torque. Set 0 to disable.
	 */
	this.maxMotorForce=...

	/**
	 * The frequency of the spring. Set 0 to disable.
	 */
	this.frequency=...

	/**
	 * The damping ratio of the spring. Set 0 for no damping, 1 for critical damping.
	 */
	this.dampingRatio=...

	/**
	 * Set limit data into this constraint.
	 * @paramlowerLimit
	 * @paramupperLimit
	 */
	setLimit:function(){}...

	/**
	 * Set motor data into this constraint.
	 * @parammotorSpeed
	 * @parammaxMotorForce
	 */
	setMotor:function(){}...

	/**
	 * Set spring data into this constraint.
	 * @paramfrequency
	 * @paramdampingRatio
	 */
	setSpring:function(){}...

}; // eof: com.element.oimo.physics.constraint.joint.LimitMotor

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.HingeJoint
// maybe goes with  ../../src/dev/constraint/joint/HingeJoint.js
/**
 * A hinge joint allows only for relative rotation of rigid bodies along the axis.
 * @author saharan
 */
OIMO.HingeJoint=function(...){}
OIMO.HingeJoint.prototype={
	/**
	 * The axis in the first body's coordinate system.
	 */
	this.localAxis1=...

	/**
	 * The axis in the second body's coordinate system.
	 */
	this.localAxis2=...

	/**
	 * The rotational limit and motor information of the joint.
	 */
	this.limitMotor=...

	/**
	 * @inheritDoc
	 */
	preSolve:function(){}...

	/**
	 * @inheritDoc
	 */
	solve:function(){}...

	/**
	 * @inheritDoc
	 */
	postSolve:function(){}...

}; // eof: com.element.oimo.physics.constraint.joint.HingeJoint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.WheelJoint
// maybe goes with  ../../src/dev/constraint/joint/WheelJoint.js
/**
 * A wheel joint allows for relative rotation between two rigid bodies along two axes.
 * The wheel joint also allows for relative translation for the suspension.
 */
OIMO.WheelJoint=function(...){}
OIMO.WheelJoint.prototype={
	/**
	 * The first axis in local coordinate system.
	 */
	this.localAxis1=...

	/**
	 * The second axis in local coordinate system.
	 */
	this.localAxis2=...

	/**
	 * The first rotational limit and motor information of the joint.
	 */
	this.rotationalLimitMotor1=...

	/**
	 * The second rotational limit and motor information of the joint.
	 */
	this.rotationalLimitMotor2=...

	/**
	 * The translational limit and motor information of the joint.
	 */
	this.translationalLimitMotor=...

	/**
	 * @inheritDoc
	 */
	preSolve:function(){}...

	/**
	 * @inheritDoc
	 */
	solve:function(){}...

	/**
	 * @inheritDoc
	 */
	postSolve:function(){}...

}; // eof: com.element.oimo.physics.constraint.joint.WheelJoint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.DistanceJoint
// maybe goes with  ../../src/dev/constraint/joint/DistanceJoint.js
/**
 * A distance joint limits the distance between two anchor points on rigid bodies.
 * @author saharan
 */
OIMO.DistanceJoint=function(...){}
OIMO.DistanceJoint.prototype={
	/**
	 * The limit and motor information of the joint.
	 */
	this.limitMotor=...

	/**
	 * @inheritDoc
	 */
	preSolve:function(){}...

	/**
	 * @inheritDoc
	 */
	solve:function(){}...

	/**
	 * @inheritDoc
	 */
	postSolve:function(){}...

}; // eof: com.element.oimo.physics.constraint.joint.DistanceJoint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.JointLink
// maybe goes with  ../../src/dev/constraint/joint/JointLink.js
/**
 * A link list of joints.
 * @author saharan
 */
OIMO.JointLink=function(...){}
OIMO.JointLink.prototype={
	/**
	 * The previous joint link.
	 */
	this.prev=...

	/**
	 * The next joint link.
	 */
	this.next=...

	/**
	 * The other rigid body connected to the joint.
	 */
	this.body=...

	/**
	 * The joint of the link.
	 */
	this.joint=...

}; // eof: com.element.oimo.physics.constraint.joint.JointLink

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.dynamics.RigidBody
// maybe goes with  ../../src/dev/dynamics/RigidBody.js
/**
 * 剛体のクラスです。
 * 剛体は衝突処理用に単数あるいは複数の形状を持ち、
 * それぞれ個別にパラメーターを設定できます。
 * @author saharan
 */
OIMO.RigidBody=function(...){}
OIMO.RigidBody.prototype={
	/**
	 * 剛体の種類を表します。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 
	 * 剛体の種類を変更する場合は、必ず
	 * setupMass メソッドの引数に設定したい種類を指定してください。
	 */
	this.type=...

	/**
	 * この剛体が動的な剛体であるかどうかを示します。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.isDynamic=...

	/**
	 * この剛体が静的な剛体であるかどうかを示します。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.isStatic=...

	/**
	 * 重心のワールド座標です。
	 */
	this.position=...

	/**
	 * 姿勢を表すクォータニオンです。
	 */
	this.orientation=...

	/**
	 * スリープ直前での重心のワールド座標です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.sleepPosition=...

	/**
	 * スリープ直前での姿勢を表すクォータニオンです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.sleepOrientation=...

	/**
	 * 並進速度です。
	 */
	this.linearVelocity=...

	/**
	 * 角速度です。
	 */
	this.angularVelocity=...

	/**
	 * 姿勢を表す回転行列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 
	 * 回転行列は、ステップ毎にクォータニオンから再計算されます。
	 */
	this.rotation=...

	/**
	 * 質量です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 
	 * 質量は setupMass メソッドを呼び出すと、
	 * 含まれている形状から自動で再計算されます。
	 */
	this.mass=...

	/**
	 * 質量の逆数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 
	 * 質量は setupMass メソッドを呼び出すと、
	 * 含まれている形状から自動で再計算されます。
	 */
	this.inverseMass=...

	/**
	 * ワールド系での慣性テンソルの逆行列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 
	 * ワールド系での慣性テンソルの逆行列は、ステップ毎に
	 * 姿勢と初期状態の慣性テンソルの逆数から再計算されます。
	 */
	this.inverseInertia=...

	/**
	 * 初期状態での慣性テンソルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 
	 * 慣性テンソルは setupMass メソッドを呼び出すと、
	 * 含まれている形状から自動で再計算されます。
	 */
	this.localInertia=...

	/**
	 * 初期状態での慣性テンソルの逆行列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 
	 * 慣性テンソルは setupMass メソッドを呼び出すと、
	 * 含まれている形状から自動で再計算されます。
	 */
	this.inverseLocalInertia=...

	/**
	 * 剛体に含まれている形状の配列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.shapes=...

	/**
	 * 剛体に含まれている形状の数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.numShapes=...

	/**
	 * 剛体が追加されているワールドです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.parent=...

	/**
	 * 剛体に接続されているジョイントのリンク配列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.jointLink=...

	/**
	 * 剛体に接続されているジョイントの数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.numJoints=...

	/**
	 * 剛体がシミュレーションアイランドに追加されたかどうかを示します。
	 * この変数は内部でのみ使用されます。
	 */
	this.addedToIsland=...

	/**
	 * 剛体が静止してからの時間です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.sleepTime=...

	/**
	 * 剛体がスリープ状態であるかどうかを示します。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 剛体をスリープさせる場合は sleep メソッドを、
	 * 剛体のスリープ状態を解除する場合は awake メソッドを呼び出してください。
	 */
	this.sleeping=...

	/**
	 * 剛体をスリープさせるかを示します。
	 * シミュレーションアイランド内の全ての剛体が静止している状態が一定時間続くと、
	 * そのシミュレーションアイランドはスリープ状態に入ります。
	 * スリープしている剛体は awake メソッドが呼び出されるか、
	 * 外部からの干渉を受けるまで、スリープ状態が解除されることはありません。
	 */
	this.allowSleep=...

	/**
	 * 新しく RigidBody オブジェクトを作成します。
	 * 回転成分を指定することもできます。
	 * @paramx
	 * @paramy
	 * @paramz
	 * @paramrad ラジアンでの回転角度
	 * @paramax 回転軸の x 成分
	 * @paramay 回転軸の y 成分
	 * @paramaz 回転軸の z 成分
	 */
	RigidBody:function(){}...

	/**
	 * 剛体に形状を追加します。
	 * 形状を追加した場合、次のステップ開始までに setupMass メソッドを呼び出してください。
	 * @paramshape 追加する形状
	 */
	addShape:function(){}...

	/**
	 * 剛体から形状を削除します。
	 * 形状を削除した場合、次のステップ開始までに setupMass メソッドを呼び出してください。
	 * @paramshape 削除する形状
	 */
	removeShape:function(){}...

	/**
	 * Calulates mass datas(center of gravity, mass, moment inertia, etc...).
	 * If the parameter type is set to BODY_STATIC, the rigid body will be fixed to the space.
	 * If the parameter adjustPosition is set to true, the shapes' relative positions and
	 * the rigid body's position will be adjusted to the center of gravity.
	 * @paramtype
	 * @paramadjustPosition
	 */
	setupMass:function(){}...

	/**
	 * Awake the rigid body.
	 */
	awake:function(){}...

	/**
	 * Sleep the rigid body.
	 */
	sleep:function(){}...

	/**
	 * Get whether the rigid body has not any connection with others.
	 * @return
	 */
	isLonely:function(){}...

	/**
	 * 剛体の運動を時間積分し、形状などの情報を更新します。
	 * このメソッドはワールドのステップを呼ぶと自動で呼び出されるので、
	 * 通常は外部から呼ぶ必要はありません。
	 * @paramtimeStep 時間刻み幅
	 */
	updatePosition:function(){}...

}; // eof: com.element.oimo.physics.dynamics.RigidBody

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.dynamics.World
// maybe goes with  ../../src/dev/dynamics/World.js
/**
 * 物理演算ワールドのクラスです。
 * 全ての物理演算オブジェクトはワールドに追加する必要があります。
 * @author saharan
 */
OIMO.World=function(...){}
OIMO.World.prototype={
	/**
	 * The rigid body list.
	 */
	this.rigidBodies=...

	/**
	 * The number of rigid bodies.
	 */
	this.numRigidBodies=...

	/**
	 * The contact list.
	 */
	this.contacts=...

	/**
	 * The number of contacts.
	 */
	this.numContacts=...

	/**
	 * The number of contact points.
	 */
	this.numContactPoints=...

	/**
	 * The joint list.
	 */
	this.joints=...

	/**
	 * The number of joints.
	 */
	this.numJoints=...

	/**
	 * The number of simulation islands.
	 */
	this.numIslands=...

	/**
	 * 1回のステップで進む時間の長さです。
	 */
	this.timeStep=...

	/**
	 * The gravity in the world.
	 */
	this.gravity=...

	/**
	 * The number of iterations for constraint solvers.
	 */
	this.numIterations=...

	/**
	 * Whether the constraints randomizer is enabled or not.
	 */
	this.enableRandomizer=...

	/**
	 * パフォーマンスの詳細情報です。
	 * 計算に要した時間などが記録されています。
	 */
	this.performance=...

	/**
	 * 詳細な衝突判定をできるだけ削減するために使用される広域衝突判定です。
	 */
	this.broadPhase=...

	/**
	 * Reset the randomizer and remove all rigid bodies, shapes, joints and any object from the world.
	 */
	clear:function(){}...

	/**
	 * ワールドに剛体を追加します。
	 * 追加された剛体はステップ毎の演算対象になります。
	 * @paramrigidBody 追加する剛体
	 */
	addRigidBody:function(){}...

	/**
	 * ワールドから剛体を削除します。
	 * 削除された剛体はステップ毎の演算対象から外されます。
	 * @paramrigidBody 削除する剛体
	 */
	removeRigidBody:function(){}...

	/**
	 * ワールドに形状を追加します。
	 * <strong>剛体をワールドに追加、およびワールドに追加されている剛体に形状を追加すると、
	 * 自動で形状もワールドに追加されるので、このメソッドは外部から呼ばないでください。</strong>
	 * @paramshape 追加する形状
	 */
	addShape:function(){}...

	/**
	 * ワールドから形状を削除します。
	 * <strong>剛体をワールドから削除、およびワールドに追加されている剛体から形状を削除すると、
	 * 自動で形状もワールドから削除されるので、このメソッドは外部から呼ばないでください。</strong>
	 * @paramshape 削除する形状
	 */
	removeShape:function(){}...

	/**
	 * ワールドにジョイントを追加します。
	 * 追加されたジョイントはステップ毎の演算対象になります。
	 * @paramjoint 追加するジョイント
	 */
	addJoint:function(){}...

	/**
	 * ワールドからジョイントを削除します。
	 * 削除されたジョイントはステップ毎の演算対象から外されます。
	 * @paramjoint 削除するジョイント
	 */
	removeJoint:function(){}...

	/**
	 * ワールドの時間をタイムステップ秒だけ進めます。
	 */
	step:function(){}...

}; // eof: com.element.oimo.physics.dynamics.World

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrowphase.CollisionDetector
// maybe goes with  ../../src/dev/collision/narrowphase/CollisionDetector.js
/**
 * A collision detector detects collisions between two shapes.
 * @author saharan
 */
OIMO.CollisionDetector=function(...){}
OIMO.CollisionDetector.prototype={
	/**
	 * Whether the collision detector flips two shapes in detectCollision or not.
	 */
	this.flip=...

	/**
	 * Detect collision between two shapes.
	 * @paramshape1
	 * @paramshape2
	 * @parammanifold
	 */
	detectCollision:function(){}...

}; // eof: com.element.oimo.physics.collision.narrowphase.CollisionDetector

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrowphase.BoxBoxCollisionDetector
// maybe goes with  ../../src/dev/collision/narrowphase/BoxBoxCollisionDetector.js
/**
 * A collision detector which detects collisions between two boxes.
 * @author saharan
 */
OIMO.BoxBoxCollisionDetector=function(...){}
OIMO.BoxBoxCollisionDetector.prototype={
	/**
	 * @inheritDoc
	 */
	detectCollision:function(){}...

}; // eof: com.element.oimo.physics.collision.narrowphase.BoxBoxCollisionDetector

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrowphase.SphereBoxCollisionDetector
// maybe goes with  ../../src/dev/collision/narrowphase/SphereBoxCollisionDetector.js
/**
 * A collision detector which detects collisions between sphere and box.
 * @author saharan
 */
OIMO.SphereBoxCollisionDetector=function(...){}
OIMO.SphereBoxCollisionDetector.prototype={
	/**
	 * @inheritDoc
	 */
	detectCollision:function(){}...

}; // eof: com.element.oimo.physics.collision.narrowphase.SphereBoxCollisionDetector

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrowphase.SphereSphereCollisionDetector
// maybe goes with  ../../src/dev/collision/narrowphase/SphereSphereCollisionDetector.js
/**
 * A collision detector which detects collisions between two spheres.
 * @author saharan
 */
OIMO.SphereSphereCollisionDetector=function(...){}
OIMO.SphereSphereCollisionDetector.prototype={
	/**
	 * @inheritDoc
	 */
	detectCollision:function(){}...

}; // eof: com.element.oimo.physics.collision.narrowphase.SphereSphereCollisionDetector

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.shape.SphereShape
// maybe goes with  ../../src/dev/collision/shape/SphereShape.js
/**
 * A sphere shape.
 * @author saharan
 */
OIMO.SphereShape=function(...){}
OIMO.SphereShape.prototype={
	/**
	 * The radius of the shape.
	 */
	this.radius=...

	/**
	 * @inheritDoc
	 */
	calculateMassInfo:function(){}...

	/**
	 * @inheritDoc
	 */
	updateProxy:function(){}...

}; // eof: com.element.oimo.physics.collision.shape.SphereShape

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.shape.Shape
// maybe goes with  ../../src/dev/collision/shape/Shape.js
/**
 * A shape is used to detect collisions of rigid bodies.
 * @author saharan
 */
OIMO.Shape=function(...){}
OIMO.Shape.prototype={
	/**
	 * Global identification of next shape.
	 * This will be incremented every time a shape is created.
	 */
	this.nextID=...

	/**
	 * The previous shape in parent rigid body.
	 */
	this.prev=...

	/**
	 * The next shape in parent rigid body.
	 */
	this.next=...

	/**
	 * The global identification of the shape.
	 * This value should be unique to the shape.
	 */
	this.id=...

	/**
	 * The type of the shape.
	 */
	this.type=...

	/**
	 * The center of gravity of the shape in world coordinate system.
	 */
	this.position=...

	/**
	 * The rotation matrix of the shape in world coordinate system.
	 */
	this.rotation=...

	/**
	 * The position of the shape in parent's coordinate system.
	 */
	this.relativePosition=...

	/**
	 * The rotation matrix of the shape in parent's coordinate system.
	 */
	this.relativeRotation=...

	/**
	 * The coefficient of friction of the shape.
	 */
	this.friction=...

	/**
	 * The coefficient of restitution of the shape.
	 */
	this.restitution=...

	/**
	 * The density of the shape.
	 */
	this.density=...

	/**
	 * The axis-aligned bounding box of the shape.
	 */
	this.aabb=...

	/**
	 * The proxy of the shape.
	 * This is used for broad-phase collision detection.
	 */
	this.proxy=...

	/**
	 * The parent rigid body of the shape.
	 */
	this.parent=...

	/**
	 * The linked list of the contacts with the shape.
	 */
	this.contactLink=...

	/**
	 * The number of the contacts with the shape.
	 */
	this.numContacts=...

	/**
	 * The bits of the collision groups to which the shape belongs.
	 */
	this.belongsTo=...

	/**
	 * The bits of the collision groups with which the shape collides.
	 */
	this.collidesWith=...

	/**
	 * Calculate the mass information of the shape.
	 * @paramout
	 */
	calculateMassInfo:function(){}...

	/**
	 * Update the proxy of the shape.
	 */
	updateProxy:function(){}...

}; // eof: com.element.oimo.physics.collision.shape.Shape

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.shape.holds
// maybe goes with  ../../src/dev/collision/shape/holds.js
/**
 * This class holds mass information of a shape.
 * @author saharan
 */
OIMO.MassInfo=function(...){}
OIMO.MassInfo.prototype={
	/**
	 * Mass of the shape.
	 */
	this.mass=...

	/**
	 * The moment inertia of the shape.
	 */
	this.inertia=...

}; // eof: com.element.oimo.physics.collision.shape.holds

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.shape.ShapeConfig
// maybe goes with  ../../src/dev/collision/shape/ShapeConfig.js
/**
 * A shape configuration holds common configuration data for constructing a shape.
 * Shape configurations can be reused safely.
 * @author saharan
 */
OIMO.ShapeConfig=function(...){}
OIMO.ShapeConfig.prototype={
	/**
	 * The position of the shape in parent's coordinate system.
	 */
	this.relativePosition=...

	/**
	 * The rotation matrix of the shape in parent's coordinate system.
	 */
	this.relativeRotation=...

	/**
	 * The coefficient of friction of the shape.
	 */
	this.friction=...

	/**
	 * The coefficient of restitution of the shape.
	 */
	this.restitution=...

	/**
	 * The density of the shape.
	 */
	this.density=...

	/**
	 * The bits of the collision groups to which the shape belongs.
	 */
	this.belongsTo=...

	/**
	 * The bits of the collision groups with which the shape collides.
	 */
	this.collidesWith=...

}; // eof: com.element.oimo.physics.collision.shape.ShapeConfig

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.shape.BoxShape
// maybe goes with  ../../src/dev/collision/shape/BoxShape.js
/**
 * A box shape.
 * @author saharan
 */
OIMO.BoxShape=function(...){}
OIMO.BoxShape.prototype={
	/**
	 * The width of the box.
	 */
	this.width=...

	/**
	 * The half-width of the box.
	 */
	this.halfWidth=...

	/**
	 * The height of the box.
	 */
	this.height=...

	/**
	 * The half-height of the box.
	 */
	this.halfHeight=...

	/**
	 * The depth of the box.
	 */
	this.depth=...

	/**
	 * The half-depth of the box.
	 */
	this.halfDepth=...

	/**
	 * The normalized direction vector of the width.
	 */
	this.normalDirectionWidth=...

	/**
	 * The normalized direction vector of the height.
	 */
	this.normalDirectionHeight=...

	/**
	 * The normalized direction vector of the depth.
	 */
	this.normalDirectionDepth=...

	/**
	 * The direction vector of the half-width.
	 */
	this.halfDirectionWidth=...

	/**
	 * The direction vector of the half-height.
	 */
	this.halfDirectionHeight=...

	/**
	 * The direction vector of the half-depth.
	 */
	this.halfDirectionDepth=...

	/**
	 * @inheritDoc
	 */
	calculateMassInfo:function(){}...

	/**
	 * @inheritDoc
	 */
	updateProxy:function(){}...

}; // eof: com.element.oimo.physics.collision.shape.BoxShape

