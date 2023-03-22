/**
 * @swagger
 * components:
 *   schemas:
 *     ChecklistForm:
 *       type: object
 *       properties:
 *         checklistId:
 *           type: string
 *           description: The created checklistId.
 *         productCategory:
 *           type: enum
 *           description: The product category.
 *         productAvailable:
 *           type: boolean
 *           description: The product available.
 *         productFile:
 *           type: file
 *           description: The product file data.
 *         productDetails:
 *           type: string
 *           description: The product details.
 *         productSummery:
 *           type: string
 *           description: The product summery.
 *         statusByInspectionManager:
 *           type: enum
 *           description: The product status by Inspection manager
 */

/**
 * @swagger
 * /createChecklistForm:
 *   post:
 *     security:
 *         - Authorization: []
 *     summary: Create checklist form
 *     description: Create checklist form by procurement manager 
 *     tags:
 *       - Create checklist form
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/ChecklistForm' 
 *             properties:
 *     responses:
 *       200:
 *         description: checklist form is create successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/ChecklistForm' 
 *               properties:
 *       401:
 *         description: please authenticate
 *       400:
 *         description: You are not allowed to create checklist
 *       500:
 *         description: checklist form is not created
 */

/**
 * @swagger
 * /fillChecklistForm:
 *   post:
 *     security:
 *         - Authorization: []
 *     summary: Fill checklist form
 *     description: Filled checklist form by inspection manager
 *     tags:
 *       - Fill checklist form
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - productCategory
 *               - productAvailable
 *               - productDetails
 *               - productSummery
 *               - statusByInspectionManager
 *             properties:
 *               id:
 *                 type: string
 *                 description: The form check list id
 *               productCategory:
 *                 type: string
 *                 description: The product category
 *               productAvailable:
 *                 type: boolean
 *                 description: The product available
 *               productDetails:
 *                 type: string
 *                 description: The product details
 *               productSummery:
 *                 type: string
 *                 description: The product summery
 *               statusByInspectionManager:
 *                 type: enum
 *                 description: The status by inspection manager
 *     responses:
 *       200:
 *         description: checklist form filled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/ChecklistForm' 
 *               properties:
 *       401:
 *         description: please authenticate
 *       400:
 *         description: You are not allowed to fill checklist form
 *       500:
 *         description: Checklist form is not filled
 */

/**
 * @swagger
 * /fileUploadInChecklistForm:
 *   post:
 *     security:
 *         - Authorization: []
 *     summary: File upload in checklist form
 *     description: File upload in checklist form by inspection manager
 *     tags:
 *       - File upload in checklist form
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - productFile
 *             properties:
 *               id:
 *                 type: string
 *                 description: The form check list id
 *               productFile:
 *                 type: string
 *                 format: binary
 *                 description: The file upload in check list form
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/ChecklistForm' 
 *               properties:
 *       401:
 *         description: please authenticate
 *       400:
 *         description: You are not allowed to upload file
 *       500:
 *         description: File is not uploaded
 */

