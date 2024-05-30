import PropTypes from "prop-types";

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    return(
        <tr>
            { isHeader ? (
                textSecondCell === null ? (
                    <th colspan='2'>`${textFirstCell}`</th>
                ) : (
                    <>
                        <th>`{textFirstCell}`</th>
                        <th>`${textSecondCell}`</th>
                    </>
                )
            ) : (
                <>
                    <th>`${textFirstCell}`</th>
                    <th>`${textSecondCell}`</th>
                </>
            )};
        </tr>
    );
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};
  
CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};