
/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         orderByName:
 *           type: string
 *           description: The order created by person.
 *         orderByEmail:
 *           type: string
 *           format: email
 *           description: The order created by person email.
 *         orderByMobile:
 *           type: integer
 *           description: The order created by person mobile.
 *         orderNumber:
 *           type: string
 *           description: The unique order number.
 *         orderStatus:
 *           type: enum
 *           description: The order status.
 *         checklistFormId:
 *           type: string
 *           description: The associated with order checklistFormId.
 */

/**
 * @swagger
 * /createOrder:
 *   post:
 *     security:
 *         - Authorization: []
 *     summary: Create order
 *     description: Create order by procurement manager
 *     tags:
 *       - Create order
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Order' 
 *             properties:
 *     responses:
 *       200:
 *         description: Order is create successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Order' 
 *               properties:
 *       401:
 *         description: please authenticate
 *       400:
 *         description: You are not allowed to create order
 */

 /**
 * @swagger
 * /statusOfOrder:
 *   post:
 *     security:
 *         - Authorization: []
 *     summary: status of order
 *     description: See the status of order
 *     tags:
 *       - status of order
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id 
 *             properties:
 *               id:
 *                 type: string
 *                 description: The user's unique id
 *     responses:
 *       200:
 *         description: Order status is find successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Order' 
 *               properties:
 *       401:
 *         description: please authenticate
 *       400:
 *         description: You are not allowed to see order status
 *       500:
 *         description: Server error
 */ 

 /**
 * @swagger
 * /updateStatusOfOrder:
 *   post:
 *     security:
 *         - Authorization: []
 *     summary: update order status
 *     description: update order status by admin , procurement manager and inspection manager
 *     tags:
 *       - update order status
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id 
 *               - orderStatus
 *             properties:
 *               id:
 *                 type: string
 *                 description: The user's unique id
 *               orderStatus:
 *                 type: string
 *                 description: The user's order status
 *     responses:
 *       200:
 *         description: Order status is update successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Order' 
 *               properties:
 *       401:
 *         description: please authenticate
 *       400:
 *         description: You are not allowed to update order status
 *       500:
 *         description: Server error
 */ 


 /**
 * @swagger
 * /linkChecklistFormInOrder:
 *   post:
 *     security:
 *         - Authorization: []
 *     summary: link checklist form in order
 *     description: link checklist form in order by procurement manager
 *     tags:
 *       - link checklist form in order
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - checklistId 
 *               - orderStatus
 *             properties:
 *               checklistId:
 *                 type: string
 *                 description: The checklist form Id
 *               orderId:
 *                 type: string
 *                 description: The user's object orderId
 *     responses:
 *       200:
 *         description: Checklist form linked successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Order' 
 *               properties:
 *       401:
 *         description: please authenticate
 *       400:
 *         description: You are not allowed to link checklist form with order.
 *       500:
 *         description: Server error
 */ 