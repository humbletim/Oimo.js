///////////////////////////////////////////////////////////////
// com.element.oimo.physics.OimoPhysics
// maybe goes with  com/element/oimo/physics/OimoPhysics.js
	/**
	 * OimoPhysics オブジェクトを作成することはできません。
	 */
	OimoPhysics:function(){}...

}; // eof: com.element.oimo.physics.OimoPhysics

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.Constraint
// maybe goes with  ../../src/rev/constraint/Constraint.js
/**
 * 剛体の拘束を扱うクラスです。
 * 剛体間の接触やジョイントは全て拘束として処理されます。
 * @author saharan
 */
OIMO.Constraint=function(...){}
OIMO.Constraint.prototype={
	/**
	 * この拘束の親となるワールドです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.parent=...

	/**
	 * 拘束の対象となる剛体1です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.body1=...

	/**
	 * 拘束の対象となる剛体2です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.body2=...

	/**
	 * この拘束がシミュレーションアイランドに追加されたかどうかを示します。
	 * この変数は内部でのみ使用されます。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.addedToIsland=...

	/**
	 * この拘束がスリープ状態かどうかを示します。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.sleeping=...

	/**
	 * 新しく Constraint オブジェクトを作成します。
	 * <strong>このコンストラクタは外部から呼び出さないでください。</strong>
	 */
	Constraint:function(){}...

	/**
	 * 拘束処理の前に一度だけ呼び出すべきメソッドです。
	 * @paramtimeStep 時間刻み幅
	 * @paraminvTimeStep 時間刻み幅の逆数
	 */
	preSolve:function(){}...

	/**
	 * この拘束を処理します。
	 * 通常このメソッドは繰り返し呼び出され、
	 * 拘束の精度は繰り返し回数に左右されます。
	 */
	solve:function(){}...

	/**
	 * 拘束処理の後に一度だけ呼び出すべきメソッドです。
	 */
	postSolve:function(){}...

}; // eof: com.element.oimo.physics.constraint.Constraint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.util.DebugDraw
// maybe goes with  ../../src/rev/util/DebugDraw.js
/**
 * 簡易的なワールドの3D表示機能を持ったクラスです。
 * @author saharan
 */
OIMO.DebugDraw=function(...){}
OIMO.DebugDraw.prototype={
	/**
	 * 新しい DebugDraw オブジェクトを生成します。
	 * @paramwidth 画面の幅
	 * @paramheight 画面の高さ
	 */
	DebugDraw:function(){}...

	/**
	 * Context3D の初期化時に呼び出します。
	 * @paramcontext3D 使用する Context3D
	 */
	setContext3D:function(){}...

	/**
	 * 描画対象のワールドを設定します。
	 * @paramworld
	 */
	setWorld:function(){}...

	/**
	 * カメラ位置などを設定します。
	 * 平行光源の向きもカメラの位置に合わせて調整されます。
	 * @paramcamX カメラの x 座標
	 * @paramcamY カメラの y 座標
	 * @paramcamZ カメラの z 座標
	 * @paramtargetX 注視点の x 座標
	 * @paramtargetY 注視点の y 座標
	 * @paramtargetZ 注視点の z 座標
	 * @paramupX 上方向のベクトルの x 成分
	 * @paramupY 上方向のベクトルの y 成分
	 * @paramupZ 上方向のベクトルの z 成分
	 */
	camera:function(){}...

	/**
	 * 描画から除外する形状を追加します。
	 * @paramshape 描画から除外する形状
	 */
	addIgnore:function(){}...

	/**
	 * 描画から除外した形状を全て削除します。
	 */
	clearIgnores:function(){}...

	/**
	 * ワールドのレンダリングを行います。
	 */
	render:function(){}...

}; // eof: com.element.oimo.physics.util.DebugDraw

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.util.Performance
// maybe goes with  ../../src/rev/util/Performance.js
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
 * 3次元のベクトルを扱うクラスです。
 * ベクトルは列ベクトルとして扱われます。
 * オブジェクトの不要な作成を避けるため、
 * 関数ではほとんどの演算結果は自身のオブジェクトに格納されます。
 * @author saharan
 */
OIMO.Vec3=function(...){}
OIMO.Vec3.prototype={
	/**
	 * x 成分です。
	 */
	this.x=...

	/**
	 * y 成分です。
	 */
	this.y=...

	/**
	 * z 成分です。
	 */
	this.z=...

	/**
	 * 新しく Vec3 オブジェクトを作成します。
	 * 引数を指定しない場合は、全ての値に0が格納されます。
	 * @paramx 設定する x 成分
	 * @paramy 設定する y 成分
	 * @paramz 設定する z 成分
	 */
	Vec3:function(){}...

	/**
	 * このベクトルの値を指定された値で初期化します。
	 * 引数を指定しない場合は、全ての値に0が格納されます。
	 * @paramx 設定する x 成分
	 * @paramy 設定する y 成分
	 * @paramz 設定する z 成分
	 * @return このオブジェクト
	 */
	init:function(){}...

	/**
	 * このベクトルを v1 と v2 を加算したベクトルに設定します。
	 * @paramv1 ベクトル1
	 * @paramv2 ベクトル2
	 * @return このオブジェクト
	 */
	add:function(){}...

	/**
	 * このベクトルを v1 から v2 を減算したベクトルに設定します。
	 * @paramv1 ベクトル1
	 * @paramv2 ベクトル2
	 * @return このオブジェクト
	 */
	sub:function(){}...

	/**
	 * このベクトルを v を s 倍に拡張したベクトルに設定します。
	 * @paramv ベクトル
	 * @params スカラー
	 * @return このオブジェクト
	 */
	scale:function(){}...

	/**
	 * このベクトルと v との内積を返します。
	 * @paramv ベクトル
	 * @return 内積
	 */
	dot:function(){}...

	/**
	 * このベクトルを v1 と v2 の外積のベクトルに設定します。
	 * @paramv1 ベクトル1
	 * @paramv2 ベクトル2
	 * @return このオブジェクト
	 */
	cross:function(){}...

	/**
	 * このベクトルを m で v を変換したベクトルに設定します。
	 * @paramm 行列
	 * @paramv ベクトル
	 * @return このオブジェクト
	 */
	mulMat:function(){}...

	/**
	 * このベクトルを v を正規化したベクトルに設定します。
	 * @paramv ベクトル
	 * @return このオブジェクト
	 */
	normalize:function(){}...

	/**
	 * このベクトルを v を反転したベクトルに設定します。
	 * @paramv ベクトル
	 * @return このオブジェクト
	 */
	invert:function(){}...

	/**
	 * このベクトルの大きさを返します。
	 * @return 大きさ
	 */
	length:function(){}...

	/**
	 * このベクトルの値を v からコピーします。
	 * @paramv ベクトル
	 * @return このオブジェクト
	 */
	copy:function(){}...

	/**
	 * この Vec3 オブジェクトを複製します。
	 * @return 複製された Vec3 オブジェクト
	 */
	clone:function(){}...

	/**
	 * このベクトルの文字列表現を返します。
	 * @return このベクトルを表す文字列
	 */
	toString:function(){}...

}; // eof: com.element.oimo.math.Vec3

///////////////////////////////////////////////////////////////
// com.element.oimo.math.Mat33
// maybe goes with  com/element/oimo/math/Mat33.js
/**
 * 3行3列の要素を持つ行列を扱うクラスです。
 * この行列は、ある三次元座標系から別の三次元座標系への、平行移動を除く変換をサポートします。
 * 行列は右手系の行列として扱われます。
 * オブジェクトの不要な作成を避けるため、
 * 関数ではほとんどの演算結果は自身のオブジェクトに格納されます。
 * @author saharan
 */
OIMO.Mat33=function(...){}
OIMO.Mat33.prototype={
	/**
	 * 1行1列目の要素です。
	 */
	this.e00=...

	/**
	 * 1行2列目の要素です。
	 */
	this.e01=...

	/**
	 * 1行3列目の要素です。
	 */
	this.e02=...

	/**
	 * 2行1列目の要素です。
	 */
	this.e10=...

	/**
	 * 2行2列目の要素です。
	 */
	this.e11=...

	/**
	 * 2行3列目の要素です。
	 */
	this.e12=...

	/**
	 * 3行1列目の要素です。
	 */
	this.e20=...

	/**
	 * 3行2列目の要素です。
	 */
	this.e21=...

	/**
	 * 3行3列目の要素です。
	 */
	this.e22=...

	/**
	 * 新しく Mat33 オブジェクトを作成します。
	 * 引数を指定しない場合は、単位行列で初期化されます。
	 * @parame00 設定する1行1列目の要素
	 * @parame01 設定する1行2列目の要素
	 * @parame02 設定する1行3列目の要素
	 * @parame10 設定する2行1列目の要素
	 * @parame11 設定する2行2列目の要素
	 * @parame12 設定する2行3列目の要素
	 * @parame20 設定する3行1列目の要素
	 * @parame21 設定する3行2列目の要素
	 * @parame22 設定する3行3列目の要素
	 */
	Mat33:function(){}...

	/**
	 * この行列を指定された値で初期化します。
	 * 引数を指定しない場合は、単位行列で初期化されます。
	 * @parame00 設定する1行1列目の要素
	 * @parame01 設定する1行2列目の要素
	 * @parame02 設定する1行3列目の要素
	 * @parame10 設定する2行1列目の要素
	 * @parame11 設定する2行2列目の要素
	 * @parame12 設定する2行3列目の要素
	 * @parame20 設定する3行1列目の要素
	 * @parame21 設定する3行2列目の要素
	 * @parame22 設定する3行3列目の要素
	 * @return このオブジェクト
	 */
	init:function(){}...

	/**
	 * この行列を m1 と m2 を加算した行列に設定します。
	 * @paramm1 行列1
	 * @paramm2 行列2
	 * @return このオブジェクト
	 */
	add:function(){}...

	/**
	 * この行列を m1 から m2 を減算した行列に設定します。
	 * @paramm1 行列1
	 * @paramm2 行列2
	 * @return このオブジェクト
	 */
	sub:function(){}...

	/**
	 * この行列を m を s 倍に拡張した行列に設定します。
	 * @paramm 行列
	 * @params スカラー
	 * @return このオブジェクト
	 */
	scale:function(){}...

	/**
	 * この行列を m1 と m2 を合成した行列に設定します。
	 * @paramm1 行列1
	 * @paramm2 行列2
	 * @return このオブジェクト
	 */
	mul:function(){}...

	/**
	 * この行列を m と拡大縮小行列を合成したものに設定します。
	 * @paramm 行列
	 * @paramsx x 方向の拡大率
	 * @paramsy　y 方向の拡大率
	 * @paramsz　z 方向の拡大率
	 * @paramprepend 合成順序を逆にする場合は true
	 * @return このオブジェクト
	 */
	mulScale:function(){}...

	/**
	 * この行列を m と回転行列を合成したものに設定します。
	 * @paramm 行列
	 * @paramrad ラジアンでの回転角度
	 * @paramax 回転軸の x 成分
	 * @paramay 回転軸の y 成分
	 * @paramaz 回転軸の z 成分
	 * @paramprepend 合成順序を逆にする場合は true
	 * @return このオブジェクト
	 */
	mulRotate:function(){}...

	/**
	 * この行列を m の転置行列に設定します。
	 * @paramm 行列
	 * @return このオブジェクト
	 */
	transpose:function(){}...

	/**
	 * この行列を q で表される回転行列に設定します。
	 * @paramq クォータニオン
	 * @return このオブジェクト
	 */
	setQuat:function(){}...

	/**
	 * この行列を m の逆行列に設定します。
	 * @paramm 行列
	 * @return このオブジェクト
	 */
	invert:function(){}...

	/**
	 * この行列の値を m からコピーします。
	 * @paramm 行列
	 * @return このオブジェクト
	 */
	copy:function(){}...

	/**
	 * この行列の値を4行4列の要素を持つ行列 m からコピーします。
	 * 4行目および4列目の要素はコピーされません。
	 * @paramm 4行4列の要素を持つ行列
	 * @return このオブジェクト
	 */
	copyMat44:function(){}...

	/**
	 * この Mat33 オブジェクトを複製します。
	 * @return 複製された Mat33 オブジェクト
	 */
	clone:function(){}...

	/**
	 * この行列の文字列表現を返します。
	 * @return この行列を表す文字列
	 */
	toString:function(){}...

}; // eof: com.element.oimo.math.Mat33

///////////////////////////////////////////////////////////////
// com.element.oimo.math.Mat44
// maybe goes with  com/element/oimo/math/Mat44.js
/**
 * 4行4列の要素を持つ行列を扱うクラスです。
 * この行列は、ある三次元座標系から別の三次元座標系への、平行移動を含む完全な変換をサポートします。
 * 行列は右手系の行列として扱われます。
 * オブジェクトの不要な作成を避けるため、
 * 関数ではほとんどの演算結果は自身のオブジェクトに格納されます。
 * @author saharan
 */
OIMO.Mat44=function(...){}
OIMO.Mat44.prototype={
	/**
	 * 1行1列目の要素です。
	 */
	this.e00=...

	/**
	 * 1行2列目の要素です。
	 */
	this.e01=...

	/**
	 * 1行3列目の要素です。
	 */
	this.e02=...

	/**
	 * 1行4列目の要素です。
	 */
	this.e03=...

	/**
	 * 2行1列目の要素です。
	 */
	this.e10=...

	/**
	 * 2行2列目の要素です。
	 */
	this.e11=...

	/**
	 * 2行3列目の要素です。
	 */
	this.e12=...

	/**
	 * 2行4列目の要素です。
	 */
	this.e13=...

	/**
	 * 3行1列目の要素です。
	 */
	this.e20=...

	/**
	 * 3行2列目の要素です。
	 */
	this.e21=...

	/**
	 * 3行3列目の要素です。
	 */
	this.e22=...

	/**
	 * 3行4列目の要素です。
	 */
	this.e23=...

	/**
	 * 4行1列目の要素です。
	 */
	this.e30=...

	/**
	 * 4行2列目の要素です。
	 */
	this.e31=...

	/**
	 * 4行3列目の要素です。
	 */
	this.e32=...

	/**
	 * 4行4列目の要素です。
	 */
	this.e33=...

	/**
	 * 新しく Mat44 オブジェクトを作成します。
	 * 引数を指定しない場合は、単位行列で初期化されます。
	 * @parame00 設定する1行1列目の要素
	 * @parame01 設定する1行2列目の要素
	 * @parame02 設定する1行3列目の要素
	 * @parame03 設定する1行4列目の要素
	 * @parame10 設定する2行1列目の要素
	 * @parame11 設定する2行2列目の要素
	 * @parame12 設定する2行3列目の要素
	 * @parame13 設定する2行4列目の要素
	 * @parame20 設定する3行1列目の要素
	 * @parame21 設定する3行2列目の要素
	 * @parame22 設定する3行3列目の要素
	 * @parame23 設定する3行4列目の要素
	 * @parame30 設定する4行1列目の要素
	 * @parame31 設定する4行2列目の要素
	 * @parame32 設定する4行3列目の要素
	 * @parame33 設定する4行4列目の要素
	 */
	Mat44:function(){}...

	/**
	 * この行列を指定された値で初期化します。
	 * 引数を指定しない場合は、単位行列で初期化されます。
	 * @parame00 設定する1行1列目の要素
	 * @parame01 設定する1行2列目の要素
	 * @parame02 設定する1行3列目の要素
	 * @parame03 設定する1行4列目の要素
	 * @parame10 設定する2行1列目の要素
	 * @parame11 設定する2行2列目の要素
	 * @parame12 設定する2行3列目の要素
	 * @parame13 設定する2行4列目の要素
	 * @parame20 設定する3行1列目の要素
	 * @parame21 設定する3行2列目の要素
	 * @parame22 設定する3行3列目の要素
	 * @parame23 設定する3行4列目の要素
	 * @parame30 設定する4行1列目の要素
	 * @parame31 設定する4行2列目の要素
	 * @parame32 設定する4行3列目の要素
	 * @parame33 設定する4行4列目の要素
	 * @return このオブジェクト
	 */
	init:function(){}...

	/**
	 * この行列を m1 と m2 を加算した行列に設定します。
	 * @paramm1 行列1
	 * @paramm2 行列2
	 * @return このオブジェクト
	 */
	add:function(){}...

	/**
	 * この行列を m1 から m2 を減算した行列に設定します。
	 * @paramm1 行列1
	 * @paramm2 行列2
	 * @return このオブジェクト
	 */
	sub:function(){}...

	/**
	 * この行列を m を s 倍に拡張した行列に設定します。
	 * @paramm 行列
	 * @params スカラー
	 * @return このオブジェクト
	 */
	scale:function(){}...

	/**
	 * この行列を m1 と m2 を合成した行列に設定します。
	 * @paramm1 行列1
	 * @paramm2 行列2
	 * @return このオブジェクト
	 */
	mul:function(){}...

	/**
	 * この行列を m と拡大縮小行列を合成したものに設定します。
	 * @paramm 行列
	 * @paramsx x 方向の拡大率
	 * @paramsy　y 方向の拡大率
	 * @paramsz　z 方向の拡大率
	 * @paramprepend 合成順序を逆にする場合は true
	 * @return このオブジェクト
	 */
	mulScale:function(){}...

	/**
	 * この行列を m と回転行列を合成したものに設定します。
	 * @paramm 行列
	 * @paramrad ラジアンでの回転角度
	 * @paramax 回転軸の x 成分
	 * @paramay 回転軸の y 成分
	 * @paramaz 回転軸の z 成分
	 * @paramprepend 合成順序を逆にする場合は true
	 * @return このオブジェクト
	 */
	mulRotate:function(){}...

	/**
	 * この行列を m と平行移動行列を合成したものに設定します。
	 * @paramm 行列
	 * @paramtx x 方向の平行移動成分
	 * @paramty y 方向の平行移動成分
	 * @paramtz z 方向の平行移動成分
	 * @paramprepend 合成順序を逆にする場合は true
	 * @return このオブジェクト
	 */
	mulTranslate:function(){}...

	/**
	 * この行列を m の転置行列に設定します。
	 * @paramm 行列
	 * @return このオブジェクト
	 */
	transpose:function(){}...

	/**
	 * この行列を q で表される回転行列に設定します。
	 * @paramq クォータニオン
	 * @return このオブジェクト
	 */
	setQuat:function(){}...

	/**
	 * この行列を m の逆行列に設定します。
	 * @paramm 行列
	 * @return このオブジェクト
	 */
	invert:function(){}...

	/**
	 * この行列を指定された値を元に作られるビュー変換行列に設定します。
	 * @parameyeX 視点の x 座標
	 * @parameyeY 視点の y 座標
	 * @parameyeZ 視点の z 座標
	 * @paramatX 注視点の x 座標
	 * @paramatY 注視点の y 座標
	 * @paramatZ 注視点の z 座標
	 * @paramupX 上方向のベクトルの x 成分
	 * @paramupY 上方向のベクトルの y 成分
	 * @paramupZ 上方向のベクトルの z 成分
	 * @return このオブジェクト
	 */
	lookAt:function(){}...

	/**
	 * この行列を指定された値を元に作られる透視投影変換行列に設定します。
	 * @paramfovY y 方向の視野角
	 * @paramaspect アスペクト比
	 * @paramnear ニアクリップ面の距離
	 * @paramfar ファークリップ面の距離
	 * @return このオブジェクト
	 */
	perspective:function(){}...

	/**
	 * この行列を指定された値を元に作られる平行投影変換行列に設定します。
	 * @paramwidth 画面の幅
	 * @paramheight 画面の高さ
	 * @paramnear ニアクリップ面の距離
	 * @paramfar ファークリップ面の距離
	 * @return このオブジェクト
	 */
	ortho:function(){}...

	/**
	 * この行列の値を m からコピーします。
	 * @paramm 行列
	 * @return このオブジェクト
	 */
	copy:function(){}...

	/**
	 * この行列の値を3行3列の要素を持つ行列 m からコピーします。
	 * 4行目および4列目の値は単位行列からコピーされます。
	 * @paramm 3行3列の要素を持つ行列
	 * @return このオブジェクト
	 */
	copyMat33:function(){}...

	/**
	 * この Mat44 オブジェクトを複製します。
	 * @return 複製された Mat44 オブジェクト
	 */
	clone:function(){}...

	/**
	 * この行列の文字列表現を返します。
	 * @return この行列を表す文字列
	 */
	toString:function(){}...

}; // eof: com.element.oimo.math.Mat44

///////////////////////////////////////////////////////////////
// com.element.oimo.math.Quat
// maybe goes with  com/element/oimo/math/Quat.js
/**
 * クォータニオンを扱うクラスです。
 * クォータニオンは右手系のクォータニオンとして扱われます。
 * オブジェクトの不要な作成を避けるため、
 * 関数ではほとんどの演算結果は自身のオブジェクトに格納されます。
 * @author saharan
 */
OIMO.Quat=function(...){}
OIMO.Quat.prototype={
	/**
	 * スカラー成分です。
	 */
	this.s=...

	/**
	 * x 成分です。
	 */
	this.x=...

	/**
	 * y 成分です。
	 */
	this.y=...

	/**
	 * z 成分です。
	 */
	this.z=...

	/**
	 * 新しく Quat オブジェクトを作成します。
	 * 引数を指定しない場合は、単位クォータニオンで初期化されます。
	 * @params スカラー成分
	 * @paramx x 成分
	 * @paramy y 成分
	 * @paramz z 成分
	 */
	Quat:function(){}...

	/**
	 * このクォータニオンを指定された値で初期化します。
	 * 引数を指定しない場合は、単位クォータニオンで初期化されます。
	 * @params スカラー成分
	 * @paramx x 成分
	 * @paramy y 成分
	 * @paramz z 成分
	 */
	init:function(){}...

	/**
	 * このクォータニオンを q1 と q2 を加算したクォータニオンに設定します。
	 * @paramq1 クォータニオン1
	 * @paramq2 クォータニオン2
	 * @return このオブジェクト
	 */
	add:function(){}...

	/**
	 * このクォータニオンを q1 から q2 を減算したクォータニオンに設定します。
	 * @paramq1 クォータニオン1
	 * @paramq2 クォータニオン2
	 * @return このオブジェクト
	 */
	sub:function(){}...

	/**
	 * このクォータニオンを q を s 倍に拡張したクォータニオンに設定します。
	 * @paramq クォータニオン
	 * @params スカラー
	 * @return このオブジェクト
	 */
	scale:function(){}...

	/**
	 * このクォータニオンを q1 と q2 を合成したクォータニオンに設定します。
	 * @paramq1 クォータニオン1
	 * @paramq2 クォータニオン2
	 * @return このオブジェクト
	 */
	mul:function(){}...

	/**
	 * このクォータニオンを q を正規化したクォータニオンに設定します。
	 * @paramq クォータニオン
	 * @return このオブジェクト
	 */
	normalize:function(){}...

	/**
	 * このクォータニオンを q を反転させたクォータニオンに設定します。
	 * @paramq クォータニオン
	 * @return このオブジェクト
	 */
	invert:function(){}...

	/**
	 * このクォータニオンの大きさを返します。
	 * @return 大きさ
	 */
	length:function(){}...

	/**
	 * このクォータニオンの値を q からコピーします。
	 * @paramq クォータニオン
	 * @return このオブジェクト
	 */
	copy:function(){}...

	/**
	 * この Quat オブジェクトを複製します。
	 * @return 複製された Quat オブジェクト
	 */
	clone:function(){}...

	/**
	 * このクォータニオンの文字列表現を返します。
	 * @return このクォータニオンを表す文字列
	 */
	toString:function(){}...

}; // eof: com.element.oimo.math.Quat

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broad.Proxy
// maybe goes with  ../../src/rev/collision/broad/Proxy.js
/**
 * 広域衝突判定のために、詳細な形状の代わりに使用される
 * 軸並行境界ボックスのクラスです。
 * 詳細な形状の衝突判定の回数を削減するため、
 * 詳細な衝突判定の前に、形状はより単純な形に近似され、
 * 衝突の可能性がない形状の判定を取り除きます。
 * @author saharan
 */
OIMO.Proxy=function(...){}
OIMO.Proxy.prototype={
	/**
	 * x 軸の最小値です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.minX=...

	/**
	 * x 軸の最大値です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.maxX=...

	/**
	 * y 軸の最小値です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.minY=...

	/**
	 * y 軸の最大値です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.maxY=...

	/**
	 * z 軸の最小値です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.minZ=...

	/**
	 * z 軸の最大値です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.maxZ=...

	/**
	 * このプロキシの親となる形状です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.parent=...

	/**
	 * 新しく Proxy オブジェクトを作成します。
	 * 引数を指定しない場合は、全ての値が0に初期化されます。
	 * @paramminX x 軸の最小値
	 * @parammaxX x 軸の最大値
	 * @paramminY y 軸の最小値
	 * @parammaxY y 軸の最大値
	 * @paramminZ z 軸の最小値
	 * @parammaxZ z 軸の最大値
	 */
	Proxy:function(){}...

	/**
	 * このプロキシを指定された値で初期化します。
	 * 引数を指定しない場合は、全ての値が0に初期化されます。
	 * @paramminX x 軸の最小値
	 * @parammaxX x 軸の最大値
	 * @paramminY y 軸の最小値
	 * @parammaxY y 軸の最大値
	 * @paramminZ z 軸の最小値
	 * @parammaxZ z 軸の最大値
	 */
	init:function(){}...

	/**
	 * このプロキシが引数のプロキシと交差するかどうか判定します。
	 * @paramproxy プロキシ
	 * @return 交差する場合は true
	 */
	intersect:function(){}...

}; // eof: com.element.oimo.physics.collision.broad.Proxy

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broad.Pair
// maybe goes with  ../../src/rev/collision/broad/Pair.js
/**
 * 衝突の可能性のある形状の対を扱うクラスです。
 * @author saharan
 */
OIMO.Pair=function(...){}
OIMO.Pair.prototype={
	/**
	 * 1つ目の形状です。
	 */
	this.shape1=...

	/**
	 * 2つ目の形状です。
	 */
	this.shape2=...

	/**
	 * 新しく Pair クラスを作成します。
	 */
	Pair:function(){}...

}; // eof: com.element.oimo.physics.collision.broad.Pair

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broad.BroadPhase
// maybe goes with  ../../src/rev/collision/broad/BroadPhase.js
/**
 * 広域衝突判定を行うクラスです。
 * 広域衝突判定では、詳細な衝突判定の回数を削減するため、
 * 詳細な形状の代わりに、近似された単純な形を用いて計算されます。
 * 広域衝突判定の後、衝突の可能性がある形状のペアのみに、詳細な衝突判定が行われます。
 * @author saharan
 */
OIMO.BroadPhase=function(...){}
OIMO.BroadPhase.prototype={
	/**
	 * プロキシが重なった形状のペアの配列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.pairs=...

	/**
	 * プロキシが重なった形状のペアの数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.numPairs=...

	/**
	 * プロキシが重なった形状のペアを検索した回数です。
	 * アルゴリズムが総当りの場合、この数は形状の数を n とすると n * (n - 1) / 2 と表せます。
	 */
	this.numPairChecks=...

	/**
	 * 新しく BroadPhase オブジェクトを作成します。
	 * <strong>このコンストラクタは外部から呼び出さないでください。</strong>
	 */
	BroadPhase:function(){}...

	/**
	 * 判定対象のプロキシを追加します。
	 * @paramproxy 追加するプロキシ
	 */
	addProxy:function(){}...

	/**
	 * 判定対象のプロキシを削除します。
	 * @paramproxy 削除するプロキシ
	 */
	removeProxy:function(){}...

	/**
	 * 指定された形状で構成されるペアが有効であるかどうかを判断します。
	 * @params1 形状1
	 * @params2 形状2
	 * @return ペアが有効なら true
	 */
	isAvailablePair:function(){}...

	/**
	 * 衝突の可能性がある形状のペアを計算します。
	 */
	detectPairs:function(){}...

}; // eof: com.element.oimo.physics.collision.broad.BroadPhase

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broad.BruteForceBroadPhase
// maybe goes with  ../../src/rev/collision/broad/BruteForceBroadPhase.js
/**
 * 総当りアルゴリズムを使用して広域衝突判定を行うクラスです。
 * <strong>このアルゴリズムは速度検証以外には非推奨です。</strong>
 * 総当り判定は形状の数に対し、常に O(n^2) の計算量を要求するため、
 * 形状の増え方に比べ、負荷の増え方が非常に高くなります。
 * @author saharan
 */
OIMO.BruteForceBroadPhase=function(...){}
OIMO.BruteForceBroadPhase.prototype={
	/**
	 * 新しく BruteForceBroadPhase オブジェクトを作成します。
	 */
	BruteForceBroadPhase:function(){}...

	/**
	 * @inheritDoc
	 */
	addProxy:function(){}...

	/**
	 * @inheritDoc
	 */
	removeProxy:function(){}...

}; // eof: com.element.oimo.physics.collision.broad.BruteForceBroadPhase

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.broad.SweepAndPruneBroadPhase
// maybe goes with  ../../src/rev/collision/broad/SweepAndPruneBroadPhase.js
/**
 * Sweep And Prune アルゴリズムを使用して広域衝突判定を行うクラスです。
 * プロキシの要素は各軸についてソートされ、
 * 衝突の可能性がある形状のペアを効率的に計算することができます。
 * ワールドに対し多数の形状がワープおよび高速で移動するような場面では、
 * このアルゴリズムは好ましくない結果を生み出す可能性があります。
 * @author saharan
 */
OIMO.SweepAndPruneBroadPhase=function(...){}
OIMO.SweepAndPruneBroadPhase.prototype={
	/**
	 * 新しく SweepAndPruneBroadPhase オブジェクトを作成します。
	 */
	SweepAndPruneBroadPhase:function(){}...

	/**
	 * @inheritDoc
	 */
	addProxy:function(){}...

	/**
	 * @inheritDoc
	 */
	removeProxy:function(){}...

}; // eof: com.element.oimo.physics.collision.broad.SweepAndPruneBroadPhase

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrow.SphereCylinderCollisionDetector
// maybe goes with  ../../src/rev/collision/narrow/SphereCylinderCollisionDetector.js
/**
 * 球体と円柱との詳細な衝突判定を行います。
 * detectCollision 関数の引数に指定する形状は、
 * コンストラクタで flip を true にしていない場合、
 * 一つ目が球体、二つ目が円柱である必要があります。
 * @author saharan
 */
OIMO.SphereCylinderCollisionDetector=function(...){}
OIMO.SphereCylinderCollisionDetector.prototype={
	/**
	 * 新しく SphereCylinderCollisionDetector オブジェクトを作成します。
	 * @paramflip detectCollision 関数の引数に指定する形状の順序を、反転して受け取る場合は true
	 */
	SphereCylinderCollisionDetector:function(){}...

	/**
	 * @inheritDoc
	 */
	detectCollision:function(){}...

}; // eof: com.element.oimo.physics.collision.narrow.SphereCylinderCollisionDetector

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrow.BoxBoxCollisionDetector
// maybe goes with  ../../src/rev/collision/narrow/BoxBoxCollisionDetector.js
/**
 * 箱同士の詳細な衝突判定を行います。
 * detectCollision 関数の引数に指定する形状は、
 * どちらも箱である必要があります。
 * @author saharan
 */
OIMO.BoxBoxCollisionDetector=function(...){}
OIMO.BoxBoxCollisionDetector.prototype={
	/**
	 * 新しく BoxBoxCollisionDetector オブジェクトを作成します。
	 */
	BoxBoxCollisionDetector:function(){}...

	/**
	 * @inheritDoc
	 */
	detectCollision:function(){}...

}; // eof: com.element.oimo.physics.collision.narrow.BoxBoxCollisionDetector

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrow.SphereSphereCollisionDetector
// maybe goes with  ../../src/rev/collision/narrow/SphereSphereCollisionDetector.js
/**
 * 球体同士の詳細な衝突判定を行います。
 * detectCollision 関数の引数に指定する形状は、
 * どちらも球体である必要があります。
 * @author saharan
 */
OIMO.SphereSphereCollisionDetector=function(...){}
OIMO.SphereSphereCollisionDetector.prototype={
	/**
	 * 新しく SphereSphereCollisionDetector オブジェクトを作成します。
	 */
	SphereSphereCollisionDetector:function(){}...

	/**
	 * @inheritDoc
	 */
	detectCollision:function(){}...

}; // eof: com.element.oimo.physics.collision.narrow.SphereSphereCollisionDetector

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrow.ContactInfo
// maybe goes with  ../../src/rev/collision/narrow/ContactInfo.js
/**
 * 剛体同士の接触情報を保持するクラスです。
 * @author saharan
 */
OIMO.ContactInfo=function(...){}
OIMO.ContactInfo.prototype={
	/**
	 * 接触地点のワールド座標です。
	 */
	this.position=...

	/**
	 * 接触面に対し垂直な法線ベクトルです。
	 */
	this.normal=...

	/**
	 * 形状間に発生した重なりの大きさです。
	 * 正確には形状間の距離を表すので、
	 * 重なりが発生した場合は、この変数は負の値を取ります。
	 */
	this.overlap=...

	/**
	 * 接触を起こした形状1です。
	 */
	this.shape1=...

	/**
	 * 接触を起こした形状2です。
	 */
	this.shape2=...

	/**
	 * 接触点の識別データです。
	 */
	this.id=...

	/**
	 * 新しく ContactInfo オブジェクトを作成します。
	 */
	ContactInfo:function(){}...

}; // eof: com.element.oimo.physics.collision.narrow.ContactInfo

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrow.ContactID
// maybe goes with  ../../src/rev/collision/narrow/ContactID.js
/**
 * 接触点の識別のためのクラスです。
 * @author saharan
 */
OIMO.ContactID=function(...){}
OIMO.ContactID.prototype={
	/**
	 * 識別に使われる一つ目のデータです。
	 */
	this.data1=...

	/**
	 * 識別に使われる二つ目のデータです。
	 */
	this.data2=...

	/**
	 * 識別データが反転しているかどうかを表します。
	 */
	this.flip=...

	/**
	 * 新しく ContactID オブジェクトを作成します。
	 */
	ContactID:function(){}...

}; // eof: com.element.oimo.physics.collision.narrow.ContactID

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrow.CollisionDetector
// maybe goes with  ../../src/rev/collision/narrow/CollisionDetector.js
/**
 * より詳細な形状の衝突判定を行うクラスです。
 * @author saharan
 */
OIMO.CollisionDetector=function(...){}
OIMO.CollisionDetector.prototype={
	/**
	 * detectCollision 関数の引数に指定する形状の順序を、
	 * 反転して受け取るかどうかを表します。
	 */
	this.flip=...

	/**
	 * 新しく CollisionDetector オブジェクトを作成します。
	 * <strong>このコンストラクタは外部から呼び出さないでください。</strong>
	 */
	CollisionDetector:function(){}...

	/**
	 * 二つの形状の詳細な衝突判定を行います。
	 * 形状の種類は指定された物である必要があります。
	 * @paramshape1 形状1
	 * @paramshape2 形状2
	 * @paramresult 衝突結果の格納先
	 */
	detectCollision:function(){}...

}; // eof: com.element.oimo.physics.collision.narrow.CollisionDetector

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrow.CollisionResult
// maybe goes with  ../../src/rev/collision/narrow/CollisionResult.js
/**
 * 衝突判定の結果を格納するクラスです。
 * @author saharan
 */
OIMO.CollisionResult=function(...){}
OIMO.CollisionResult.prototype={
	/**
	 * 接触点情報の配列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.contactInfos=...

	/**
	 * 接触点情報の配列の数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.numContactInfos=...

	/**
	 * 新しく CollisionResult オブジェクトを作成します。
	 * @param maxContactInfos 格納できる接触点情報の最大数です。
	 */
	CollisionResult:function(){}...

	/**
	 * 衝突結果を追加します。
	 * @parampositionX ワールド座標系での衝突位置の x 値
	 * @parampositionY ワールド座標系での衝突位置の y 値
	 * @parampositionZ ワールド座標系での衝突位置の z 値
	 * @paramnormalX ワールド座標系での法線方向の x 値
	 * @paramnormalY ワールド座標系での法線方向の y 値
	 * @paramnormalZ ワールド座標系での法線方向の z 値
	 * @paramoverlap 二つの形状間の距離
	 * @paramshape1 形状1
	 * @paramshape2 形状2
	 * @paramdata1 識別データ1
	 * @paramdata2 識別データ2
	 * @paramflip 識別データの順序が反転しているかどうか
	 */
	addContactInfo:function(){}...

}; // eof: com.element.oimo.physics.collision.narrow.CollisionResult

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrow.CylinderCylinderCollisionDetector
// maybe goes with  ../../src/rev/collision/narrow/CylinderCylinderCollisionDetector.js
/**
 * 円柱同士の詳細な衝突判定を行います。
 * detectCollision 関数の引数に指定する形状は、
 * どちらも円柱である必要があります。
 * @author saharan
 */
OIMO.CylinderCylinderCollisionDetector=function(...){}
OIMO.CylinderCylinderCollisionDetector.prototype={
	/**
	 * 新しく CylinderCylinderCollisionDetector オブジェクトを作成します。
	 */
	CylinderCylinderCollisionDetector:function(){}...

	/**
	 * @inheritDoc
	 */
	detectCollision:function(){}...

}; // eof: com.element.oimo.physics.collision.narrow.CylinderCylinderCollisionDetector

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrow.SphereBoxCollisionDetector
// maybe goes with  ../../src/rev/collision/narrow/SphereBoxCollisionDetector.js
/**
 * 球体と箱との詳細な衝突判定を行います。
 * detectCollision 関数の引数に指定する形状は、
 * コンストラクタで flip を true にしていない場合、
 * 一つ目が球体、二つ目が箱である必要があります。
 * @author saharan
 */
OIMO.SphereBoxCollisionDetector=function(...){}
OIMO.SphereBoxCollisionDetector.prototype={
	/**
	 * 新しく SphereBoxCollisionDetector オブジェクトを作成します。
	 * @paramflip detectCollision 関数の引数に指定する形状の順序を、反転して受け取る場合は true
	 */
	SphereBoxCollisionDetector:function(){}...

	/**
	 * @inheritDoc
	 */
	detectCollision:function(){}...

}; // eof: com.element.oimo.physics.collision.narrow.SphereBoxCollisionDetector

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.narrow.BoxCylinderCollisionDetector
// maybe goes with  ../../src/rev/collision/narrow/BoxCylinderCollisionDetector.js
/**
 * Minkowski portal refinement
 * @author saharan
 */
OIMO.BoxCylinderCollisionDetector=function(...){}
OIMO.BoxCylinderCollisionDetector.prototype={
	/**
	 * 新しく BoxCylinderCollisionDetector オブジェクトを作成します。
	 * @paramflip detectCollision 関数の引数に指定する形状の順序を、反転して受け取る場合は true
	 */
	BoxCylinderCollisionDetector:function(){}...

	/**
	 * @inheritDoc
	 */
	detectCollision:function(){}...

}; // eof: com.element.oimo.physics.collision.narrow.BoxCylinderCollisionDetector

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.contact.Contact
// maybe goes with  ../../src/rev/constraint/contact/Contact.js
/**
 * 二つの剛体間の接触拘束を扱うクラスです。
 * @author saharan
 */
OIMO.Contact=function(...){}
OIMO.Contact.prototype={
	/**
	 * 接触地点のワールド座標です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.position=...

	/**
	 * 剛体1に対する接触点の相対位置です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.relativePosition1=...

	/**
	 * 剛体2に対する接触点の相対位置です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.relativePosition2=...

	/**
	 * 接触面に対し垂直な法線ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 接線および従法線とは垂直の関係にあり、
	 * 垂直抗力はこの方向にのみ働きます。
	 */
	this.normal=...

	/**
	 * 接触面に対し水平な接線ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 法線および従法線とは垂直の関係にあり、
	 * 摩擦力はこの方向および従法線方向にのみ働きます。
	 */
	this.tangent=...

	/**
	 * 接触面に対し水平な従法線ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 法線および接線とは垂直の関係にあり、
	 * 摩擦力はこの方向および接線方向にのみ働きます。
	 */
	this.binormal=...

	/**
	 * 剛体間に発生した重なりの大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 重なりを解消するため、各剛体は法線方向に押し出されます。
	 */
	this.overlap=...

	/**
	 * 法線方向に働いた垂直抗力の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.normalImpulse=...

	/**
	 * 接線方向に働いた摩擦力の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.tangentImpulse=...

	/**
	 * 法線方向の適正質量の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.normalDenominator=...

	/**
	 * 接線方向の適正質量の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.tangentDenominator=...

	/**
	 * 従法線方向の適正質量の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.binormalDenominator=...

	/**
	 * 従法線方向に働いた摩擦力の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.binormalImpulse=...

	/**
	 * 接触を起こした形状1です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.shape1=...

	/**
	 * 接触を起こした形状2です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.shape2=...

	/**
	 * 形状1に対する繋がりです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.shapeConnection1=...

	/**
	 * 形状2に対する繋がりです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.shapeConnection2=...

	/**
	 * 剛体1に対する繋がりです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.bodyConnection1=...

	/**
	 * 剛体2に対する繋がりです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.bodyConnection2=...

	/**
	 * 接触点の識別データです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.id=...

	/**
	 * この接触が前ステップでも存在したかを示します。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.warmStarted=...

	/**
	 * 新しく Contact オブジェクトを作成します。
	 */
	Contact:function(){}...

	/**
	 * この拘束を接触点情報から作成します。
	 * @paramcontactInfo
	 */
	setupFromContactInfo:function(){}...

	/**
	 * この接触からの全ての剛体と形状への参照を破棄します。
	 */
	removeReferences:function(){}...

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

}; // eof: com.element.oimo.physics.constraint.contact.Contact

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.contact.ContactConnection
// maybe goes with  ../../src/rev/constraint/contact/ContactConnection.js
/**
 * 接触点による形状と剛体の繋がりを扱うクラスです。
 * @author saharan
 */
OIMO.ContactConnection=function(...){}
OIMO.ContactConnection.prototype={
	/**
	 * 前の接触点の繋がりです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.prev=...

	/**
	 * 次の接触点の繋がりです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.next=...

	/**
	 * この繋がりによって繋がれている形状です。
	 */
	this.connectedShape=...

	/**
	 * この繋がりによって繋がれている剛体です。
	 */
	this.connectedBody=...

	/**
	 * この繋がりの親となる接触点です。
	 */
	this.parent=...

	/**
	 * 新しく ContactConnection オブジェクトを作成します。
	 * @paramparent この繋がりの親となる接触点
	 */
	ContactConnection:function(){}...

}; // eof: com.element.oimo.physics.constraint.contact.ContactConnection

///////////////////////////////////////////////////////////////
// com.element.oimo.glmini.OimoGLMini
// maybe goes with  com/element/oimo/glmini/OimoGLMini.js
}; // eof: com.element.oimo.glmini.OimoGLMini

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.test.SphereStackTest
// maybe goes with  ../../src/rev/test/SphereStackTest.js
}; // eof: com.element.oimo.physics.test.SphereStackTest

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.test.PyramidTest
// maybe goes with  ../../src/rev/test/PyramidTest.js
}; // eof: com.element.oimo.physics.test.PyramidTest

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.test.CylinderTest
// maybe goes with  ../../src/rev/test/CylinderTest.js
}; // eof: com.element.oimo.physics.test.CylinderTest

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.test.BoxTest
// maybe goes with  ../../src/rev/test/BoxTest.js
}; // eof: com.element.oimo.physics.test.BoxTest

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.test.JointTest
// maybe goes with  ../../src/rev/test/JointTest.js
}; // eof: com.element.oimo.physics.test.JointTest

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.test.CylinderTest2
// maybe goes with  ../../src/rev/test/CylinderTest2.js
}; // eof: com.element.oimo.physics.test.CylinderTest2

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.HingeJoint
// maybe goes with  ../../src/rev/constraint/joint/HingeJoint.js
/**
 * 剛体間の回転を軸方向のみに拘束するジョイントです。
 * 蝶番のような動きをします。
 * @author saharan
 */
OIMO.HingeJoint=function(...){}
OIMO.HingeJoint.prototype={
	/**
	 * 並進速度の拘束力のベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.impulse=...

	/**
	 * 可動範囲の制限に使用した拘束力の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.limitTorque=...

	/**
	 * モーターに使用した拘束力の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.motorTorque=...

	/**
	 * 角速度の拘束力のベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.torque=...

	/**
	 * 剛体1の回転の軸を表すベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.localAxis1=...

	/**
	 * 剛体2の回転の軸を表すベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.localAxis2=...

	/**
	 * 可動範囲の制限が有効であるかどうかを表します。
	 */
	this.enableLimits=...

	/**
	 * 可動範囲の下限です。
	 * enableLimits が true の時にのみ有効になります。
	 */
	this.lowerLimit=...

	/**
	 * 可動範囲の上限です。
	 * enableLimits が true の時にのみ有効になります。
	 */
	this.upperLimit=...

	/**
	 * モーターが有効であるかどうかを表します。
	 */
	this.enableMotor=...

	/**
	 * モーターの速度です。
	 * enableMotor が true の時にのみ有効になります。
	 */
	this.motorSpeed=...

	/**
	 * モーターの最大のトルクです。
	 * enableMotor が true の時にのみ有効になります。
	 */
	this.maxMotorTorque=...

	/**
	 * 新しい HingeJoint オブジェクトを作成します。
	 * @paramrigid1 剛体1
	 * @paramrigid2 剛体2
	 * @paramconfig ジョイントの設定
	 */
	HingeJoint:function(){}...

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
// com.element.oimo.physics.constraint.joint.JointConnection
// maybe goes with  ../../src/rev/constraint/joint/JointConnection.js
/**
 * ジョイントによる剛体の繋がりを扱うクラスです。
 * @author saharan
 */
OIMO.JointConnection=function(...){}
OIMO.JointConnection.prototype={
	/**
	 * 前のジョイントの繋がりです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.prev=...

	/**
	 * 次のジョイントの繋がりです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.next=...

	/**
	 * この繋がりによって繋がれている剛体です。
	 */
	this.connected=...

	/**
	 * この繋がりの親となるジョイントです。
	 */
	this.parent=...

	/**
	 * 新しく JointConnection オブジェクトを作成します。
	 * @paramparent この繋がりの親となるジョイント
	 */
	JointConnection:function(){}...

}; // eof: com.element.oimo.physics.constraint.joint.JointConnection

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.Joint
// maybe goes with  ../../src/rev/constraint/joint/Joint.js
/**
 * 剛体同士を繋ぐジョイントのクラスです。
 * @author saharan
 */
OIMO.Joint=function(...){}
OIMO.Joint.prototype={
	/**
	 * ジョイントの種類を表します。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.type=...

	/**
	 * 接続された剛体同士が衝突するかどうかを表します。
	 */
	this.allowCollision=...

	/**
	 * 剛体1に対する初期状態での相対接続位置です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.localRelativeAnchorPosition1=...

	/**
	 * 剛体2に対する初期状態での相対接続位置です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.localRelativeAnchorPosition2=...

	/**
	 * 剛体1に対する相対接続位置です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.relativeAnchorPosition1=...

	/**
	 * 剛体2に対する相対接続位置です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.relativeAnchorPosition2=...

	/**
	 * 剛体1への接続位置です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.anchorPosition1=...

	/**
	 * 剛体2への接続位置です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.anchorPosition2=...

	/**
	 * 剛体1に対する繋がりです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.connection1=...

	/**
	 * 剛体2に対する繋がりです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.connection2=...

	/**
	 * 新しい Joint オブジェクトを作成します。
	 * <strong>このコンストラクタは外部から呼び出さないでください。</strong>
	 */
	Joint:function(){}...

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
// com.element.oimo.physics.constraint.joint.DistanceJoint
// maybe goes with  ../../src/rev/constraint/joint/DistanceJoint.js
/**
 * 剛体間の二点の距離を拘束するジョイントです。
 * @author saharan
 */
OIMO.DistanceJoint=function(...){}
OIMO.DistanceJoint.prototype={
	/**
	 * 保とうとする剛体間の距離です。
	 */
	this.distance=...

	/**
	 * 拘束力の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.impulse=...

	/**
	 * 新しい DistanceJoint オブジェクトを作成します。
	 * @paramrigid1 剛体1
	 * @paramrigid2 剛体2
	 * @paramdistance 保とうとする距離
	 * @paramconfig ジョイントの設定
	 */
	DistanceJoint:function(){}...

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
// com.element.oimo.physics.constraint.joint.JointConfig
// maybe goes with  ../../src/rev/constraint/joint/JointConfig.js
/**
 * ジョイントの初期化時に使われる共通設定のクラスです。
 * このクラスの変数はコピーして使われ、直接参照を持たれることはありません。
 * @author saharan
 */
OIMO.JointConfig=function(...){}
OIMO.JointConfig.prototype={
	/**
	 * 剛体1に対する初期状態での相対接続位置です。
	 */
	this.localRelativeAnchorPosition1=...

	/**
	 * 剛体2に対する初期状態での相対接続位置です。
	 */
	this.localRelativeAnchorPosition2=...

	/**
	 * 剛体1に対する初期状態での回転軸です。
	 * このオプションは一部のジョイントにおいてのみ有効です。
	 */
	this.localAxis1=...

	/**
	 * 剛体2に対する初期状態での回転軸です。
	 * このオプションは一部のジョイントにおいてのみ有効です。
	 */
	this.localAxis2=...

	/**
	 * 接続された剛体同士が衝突するかどうかを表します。
	 */
	this.allowCollision=...

	/**
	 * 新しく JointConfig オブジェクトを作成します。
	 */
	JointConfig:function(){}...

}; // eof: com.element.oimo.physics.constraint.joint.JointConfig

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.Hinge2Joint
// maybe goes with  ../../src/rev/constraint/joint/Hinge2Joint.js
/**
 * 剛体間の回転を二つの軸方向のみに拘束するジョイントです。
 * それぞれの軸は剛体に付随し、直角に交わります。
 * これは車体とタイヤの接続部分のような動きをします。
 * @author saharan
 */
OIMO.Hinge2Joint=function(...){}
OIMO.Hinge2Joint.prototype={
	/**
	 * 並進速度の拘束力のベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.impulse=...

	/**
	 * 剛体1の回転軸に対する可動範囲の制限に使用した拘束力の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.limitTorque1=...

	/**
	 * 剛体1の回転軸に対するモーターに使用した拘束力の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.motorTorque1=...

	/**
	 * 剛体2の回転軸に対する可動範囲の制限に使用した拘束力の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.limitTorque2=...

	/**
	 * 剛体2の回転軸に対するモーターに使用した拘束力の大きさです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.motorTorque2=...

	/**
	 * 角速度の拘束力のベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.torque=...

	/**
	 * 剛体1の回転の軸を表すベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.localAxis1=...

	/**
	 * 剛体2の回転の軸を表すベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.localAxis2=...

	/**
	 * 剛体1の回転軸に対する可動範囲の制限が有効であるかどうかを表します。
	 */
	this.enableLimits1=...

	/**
	 * 剛体1の回転軸に対する可動範囲の下限です。
	 * enableLimits1 が true の時にのみ有効になります。
	 */
	this.lowerLimit1=...

	/**
	 * 剛体1の回転軸に対する可動範囲の上限です。
	 * enableLimits1 が true の時にのみ有効になります。
	 */
	this.upperLimit1=...

	/**
	 * 剛体1の回転軸に対する可動範囲の制限が有効であるかどうかを表します。
	 */
	this.enableLimits2=...

	/**
	 * 剛体1の回転軸に対する可動範囲の下限です。
	 * enableLimits1 が true の時にのみ有効になります。
	 */
	this.lowerLimit2=...

	/**
	 * 剛体1の回転軸に対する可動範囲の上限です。
	 * enableLimits1 が true の時にのみ有効になります。
	 */
	this.upperLimit2=...

	/**
	 * 剛体1の回転軸に対するモーターが有効であるかどうかを表します。
	 */
	this.enableMotor1=...

	/**
	 * 剛体1の回転軸に対するモーターの速度です。
	 * enableMotor1 が true の時にのみ有効になります。
	 */
	this.motorSpeed1=...

	/**
	 * 剛体1の回転軸に対するモーターの最大のトルクです。
	 * enableMotor1 が true の時にのみ有効になります。
	 */
	this.maxMotorTorque1=...

	/**
	 * 剛体2の回転軸に対するモーターが有効であるかどうかを表します。
	 */
	this.enableMotor2=...

	/**
	 * 剛体2の回転軸に対するモーターの速度です。
	 * enableMotor2 が true の時にのみ有効になります。
	 */
	this.motorSpeed2=...

	/**
	 * 剛体2の回転軸に対するモーターの最大のトルクです。
	 * enableMotor2 が true の時にのみ有効になります。
	 */
	this.maxMotorTorque2=...

	/**
	 * 新しい HingeJoint オブジェクトを作成します。
	 * @paramrigid1 剛体1
	 * @paramrigid2 剛体2
	 * @paramconfig ジョイントの設定
	 */
	Hinge2Joint:function(){}...

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

}; // eof: com.element.oimo.physics.constraint.joint.Hinge2Joint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.constraint.joint.BallJoint
// maybe goes with  ../../src/rev/constraint/joint/BallJoint.js
/**
 * 剛体間の一点を拘束するジョイントです。
 * @author saharan
 */
OIMO.BallJoint=function(...){}
OIMO.BallJoint.prototype={
	/**
	 * 拘束力のベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * この値は蓄積され、次ステップでも使い回されます。
	 */
	this.impulse=...

	/**
	 * 新しい BallJoint オブジェクトを作成します。
	 * @paramrigid1 剛体1
	 * @paramrigid2 剛体2
	 * @paramconfig ジョイントの設定
	 */
	BallJoint:function(){}...

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

}; // eof: com.element.oimo.physics.constraint.joint.BallJoint

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.dynamics.RigidBody
// maybe goes with  ../../src/rev/dynamics/RigidBody.js
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
	this.invertMass=...

	/**
	 * ワールド系での慣性テンソルの逆行列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 
	 * ワールド系での慣性テンソルの逆行列は、ステップ毎に
	 * 姿勢と初期状態の慣性テンソルの逆数から再計算されます。
	 */
	this.invertInertia=...

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
	this.invertLocalInertia=...

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
	 * 剛体に関与する接触点のリンク配列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.contactList=...

	/**
	 * 剛体に接続されているジョイントのリンク配列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.jointList=...

	/**
	 * 剛体に接続されているジョイントの数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.numJoints=...

	/**
	 * 剛体がシミュレーションアイランドに追加されたかどうかを示します。
	 * この変数は内部でのみ使用されます。
	 * <strong>この変数は外部から変更しないでください。</strong>
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
	 * 削除する形状のインデックスを指定した場合は、インデックスのみを使用して削除します。
	 * 形状を削除した場合、次のステップ開始までに setupMass メソッドを呼び出してください。
	 * @paramshape 削除する形状
	 * @paramindex 削除する形状のインデックス
	 */
	removeShape:function(){}...

	/**
	 * 重心座標・質量・慣性テンソルなどを算出します。
	 * type に BODY_STATIC を指定すると、この剛体は空間に対して固定されます。
	 * @paramtype 剛体の種類
	 */
	setupMass:function(){}...

	/**
	 * この剛体をスリープ状態から開放します。
	 */
	awake:function(){}...

	/**
	 * この剛体をスリープさせます。
	 */
	sleep:function(){}...

	/**
	 * 剛体の外力による速度変化を計算します。
	 * このメソッドはワールドのステップを呼ぶと自動で呼び出されるので、
	 * 通常は外部から呼ぶ必要はありません。
	 * @paramtimeStep 時間刻み幅
	 * @paramgravity 重力
	 */
	updateVelocity:function(){}...

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
// maybe goes with  ../../src/rev/dynamics/World.js
/**
 * 物理演算ワールドのクラスです。
 * 全ての物理演算オブジェクトはワールドに追加する必要があります。
 * @author saharan
 */
OIMO.World=function(...){}
OIMO.World.prototype={
	/**
	 * 追加されている剛体の数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.numRigidBodies=...

	/**
	 * 追加されている形状の数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.numShapes=...

	/**
	 * 剛体の接触点の配列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.contacts=...

	/**
	 * 剛体の接触点の数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.numContacts=...

	/**
	 * ジョイントの数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.numJoints=...

	/**
	 * シミュレーションアイランドの数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.numIslands=...

	/**
	 * 1回のステップで進む時間の長さです。
	 */
	this.timeStep=...

	/**
	 * ワールドにかかる重力です。
	 */
	this.gravity=...

	/**
	 * 衝突応答の反復処理回数です。
	 * 値が大きいほど、より正確な動きになります。
	 */
	this.iteration=...

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
	 * 新しく World オブジェクトを作成します。
	 * ワールドのタイムステップは、1秒間でのステップの実行回数から算出されます。
	 * @param stepPerSecond 1秒間でのステップの実行回数
	 */
	World:function(){}...

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
	 * @paramindex 削除するジョイントのインデックス
	 */
	removeJoint:function(){}...

	/**
	 * ワールドの時間をタイムステップ秒だけ進めます。
	 */
	step:function(){}...

}; // eof: com.element.oimo.physics.dynamics.World

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.shape.SphereShape
// maybe goes with  ../../src/rev/collision/shape/SphereShape.js
/**
 * 球体を表す形状です。
 * @author saharan
 */
OIMO.SphereShape=function(...){}
OIMO.SphereShape.prototype={
	/**
	 * 球体の半径です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.radius=...

	/**
	 * 新しく SphereShape オブジェクトを作成します。
	 * @paramradius 球体の半径
	 * @paramconfig 形状の設定
	 */
	SphereShape:function(){}...

	/**
	 * @inheritDoc
	 */
	updateProxy:function(){}...

}; // eof: com.element.oimo.physics.collision.shape.SphereShape

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.shape.Shape
// maybe goes with  ../../src/rev/collision/shape/Shape.js
/**
 * 剛体に含まれる衝突処理用の形状のクラスです。
 * @author saharan
 */
OIMO.Shape=function(...){}
OIMO.Shape.prototype={
	/**
	 * 次に生成される形状の ID の作成に使われます。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.nextID=...

	/**
	 * この形状の固有数値です。
	 * 通常この値は他の形状とかぶることはありません。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.id=...

	/**
	 * 形状の種類を表します。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.type=...

	/**
	 * 重心のワールド座標です。
	 */
	this.position=...

	/**
	 * 剛体に対する相対位置座標です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.relativePosition=...

	/**
	 * 剛体に対する初期状態での相対位置座標です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.localRelativePosition=...

	/**
	 * 回転行列です。
	 */
	this.rotation=...

	/**
	 * 剛体に対する相対回転行列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.relativeRotation=...

	/**
	 * 質量です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 * 質量を変更する場合は setDensity メソッドを使用してください。
	 */
	this.mass=...

	/**
	 * 初期状態での慣性テンソルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.localInertia=...

	/**
	 * 広域衝突判定に用いられる単純化された形状です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.proxy=...

	/**
	 * 摩擦係数です。
	 */
	this.friction=...

	/**
	 * 反発係数です。
	 */
	this.restitution=...

	/**
	 * 形状の親となる剛体です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.parent=...

	/**
	 * 形状に関与する接触点のリンク配列です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.contactList=...

	/**
	 * 形状の接触点の数です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.numContacts=...

	/**
	 * 新しい Shape オブジェクトを作成します。
	 * <strong>このコンストラクタは外部から呼び出さないでください。</strong>
	 */
	Shape:function(){}...

	/**
	 * この形状のプロキシを更新します。
	 */
	updateProxy:function(){}...

}; // eof: com.element.oimo.physics.collision.shape.Shape

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.shape.ShapeConfig
// maybe goes with  ../../src/rev/collision/shape/ShapeConfig.js
/**
 * 形状の初期化時に使われる共通設定のクラスです。
 * このクラスの変数はコピーして使われ、直接参照を持たれることはありません。
 * @author saharan
 */
OIMO.ShapeConfig=function(...){}
OIMO.ShapeConfig.prototype={
	/**
	 * 重心のワールド座標です。
	 */
	this.position=...

	/**
	 * 回転行列です。
	 * この値を変更すると、剛体ではなく剛体に含まれる形状の
	 * 相対的な角度が変更されることに注意してください。
	 */
	this.rotation=...

	/**
	 * 摩擦係数です。
	 */
	this.friction=...

	/**
	 * 反発係数です。
	 */
	this.restitution=...

	/**
	 * 密度です。
	 */
	this.density=...

	/**
	 * 新しく ShapeConfig オブジェクトを作成します。
	 */
	ShapeConfig:function(){}...

}; // eof: com.element.oimo.physics.collision.shape.ShapeConfig

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.shape.CylinderShape
// maybe goes with  ../../src/rev/collision/shape/CylinderShape.js
/**
 * 円柱を表す形状です。
 * @author saharan
 */
OIMO.CylinderShape=function(...){}
OIMO.CylinderShape.prototype={
	/**
	 * 円柱の半径です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.radius=...

	/**
	 * 円柱の高さです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.height=...

	/**
	 * 円柱の高さの半分です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.halfHeight=...

	/**
	 * ワールド座標系での円柱の向きを示す単位ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.normalDirection=...

	/**
	 * ワールド座標系での円柱の向きを示す高さの半分の長さのベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.halfDirection=...

	/**
	 * 新しく CylinderShape オブジェクトを作成します。
	 * @paramradius 円柱の半径
	 * @paramheight 円柱の高さ
	 * @paramconfig 形状の設定
	 */
	CylinderShape:function(){}...

	/**
	 * @inheritDoc
	 */
	updateProxy:function(){}...

}; // eof: com.element.oimo.physics.collision.shape.CylinderShape

///////////////////////////////////////////////////////////////
// com.element.oimo.physics.collision.shape.BoxShape
// maybe goes with  ../../src/rev/collision/shape/BoxShape.js
/**
 * 箱を表す形状です。
 * @author saharan
 */
OIMO.BoxShape=function(...){}
OIMO.BoxShape.prototype={
	/**
	 * 箱の幅です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.width=...

	/**
	 * 箱の幅の半分です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.halfWidth=...

	/**
	 * 箱の高さです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.height=...

	/**
	 * 箱の高さの半分です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.halfHeight=...

	/**
	 * 箱の奥行きです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.depth=...

	/**
	 * 箱の奥行きの半分です。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.halfDepth=...

	/**
	 * ワールド座標系での幅の向きを示す単位ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.normalDirectionWidth=...

	/**
	 * ワールド座標系での高さの向きを示す単位ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.normalDirectionHeight=...

	/**
	 * ワールド座標系での奥行きの向きを示す単位ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.normalDirectionDepth=...

	/**
	 * ワールド座標系での幅の向きを示す幅の半分の長さのベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.halfDirectionWidth=...

	/**
	 * ワールド座標系での高さの向きを示す高さの半分の長さのベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.halfDirectionHeight=...

	/**
	 * ワールド座標系での奥行きの向きを示す奥行きの半分の長さのベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.halfDirectionDepth=...

	/**
	 * ワールド座標系での頂点の一つの位置ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.vertex1=...

	/**
	 * ワールド座標系での頂点の一つの位置ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.vertex2=...

	/**
	 * ワールド座標系での頂点の一つの位置ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.vertex3=...

	/**
	 * ワールド座標系での頂点の一つの位置ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.vertex4=...

	/**
	 * ワールド座標系での頂点の一つの位置ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.vertex5=...

	/**
	 * ワールド座標系での頂点の一つの位置ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.vertex6=...

	/**
	 * ワールド座標系での頂点の一つの位置ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.vertex7=...

	/**
	 * ワールド座標系での頂点の一つの位置ベクトルです。
	 * <strong>この変数は外部から変更しないでください。</strong>
	 */
	this.vertex8=...

	/**
	 * 新しく BoxShape オブジェクトを作成します。
	 * @paramwidth 箱の幅
	 * @paramheight 箱の高さ
	 * @paramdepth 箱の奥行き
	 * @paramconfig 形状の設定
	 */
	BoxShape:function(){}...

	/**
	 * @inheritDoc
	 */
	updateProxy:function(){}...

}; // eof: com.element.oimo.physics.collision.shape.BoxShape

