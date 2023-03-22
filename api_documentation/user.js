/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - mobile
 *         - password
 *         - role
 *       properties:
 *         name:
 *           type: string
 *           description: The user's name.
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address.
 *         mobile:
 *           type: integer
 *           description: The user's mobile number.
 *         password:
 *           type: string
 *           description: User password.
 *         role:
 *           type: enum
 *           description: The user's type.
 *         assignUnder:
 *           type: string
 *           description: If user is inspection manager then in which person under working.
 */

/**
 * @swagger
 * /userLogin:
 *   post:
 *     summary: User login
 *     description: Login to the application with a registered emai or mobile and password
 *     tags:
 *       - User login
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 description: The user's password
 *     responses:
 *       200:
 *         description: Successfully authenticated user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/User'
 *               properties: 
 *       401:
 *         description: Invalid credentials
 */

/**
 * @swagger
 * /registerUser:
 *   post:
 *     security:
 *         - Authorization: []
 *     summary: Register user by admin
 *     description: Admin can register inspection manager, procurement manager and client and procurement 
 *        manager can create inspection manager and client
 *             
 *     tags:
 *       - Register user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mobile
 *               - email
 *               - password
 *               - role
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password
 *               mobile:
 *                 type: string
 *                 description: The user's mobile number
 *               role:
 *                 type: string
 *                 description: The user's role 
 *     responses:
 *       200:
 *         description: User register successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/User' 
 *       400:
 *         description: Already present contact admin for this
 *       401:
 *         description: please authenticate
 *       404:
 *         description: User is not register
 */


/**
 * @swagger
 * /updateInspectionManager:
 *   post:
 *     security:
 *         - Authorization: []
 *     summary: UpdateInspection manager
 *     description: UpdateInspection manager assignUnder value inwhich persion under working.,      
 *     tags:
 *       - UpdateInspection manager
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - assignUnder
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The user's userId address
 *               assignUnder:
 *                 type: string
 *                 description: The user's assignUnder value
 *     responses:
 *       200:
 *         description: Update inspection manager successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/User' 
 *       400:
 *         description: You are not allowed to update
 *       401:
 *         description: please authenticate
 *       404:
 *         description: User is not updated
 */