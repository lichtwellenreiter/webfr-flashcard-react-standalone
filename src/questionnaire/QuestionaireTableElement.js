import React from 'react'

const QuestionnaireTableElement = ({ questionnaire }) => (
    <tr key={ questionnaire.id } >
        <td>{ questionnaire.id }</td>
        <td>{ questionnaire.title }</td>
        <td>{ questionnaire.description }</td>
    </tr>
)

export default QuestionnaireTableElement