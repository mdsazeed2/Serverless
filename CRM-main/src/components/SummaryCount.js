import React from "react";
import './SummaryCount.css';
export default function SummaryCount() {
    return (
        <>
            <div className="summarycount_outer">
                <div className="summarycount_inner">
                    <div className="summarycount_inner_row1">
                        <label className="summarycount_label">Prospect Growth</label>
                    </div>
                    <div className="summarycount_inner_row2">
                        <label className="summarycount_value"># 500</label>
                    </div>
                </div>
            </div>
        </>
    );

}