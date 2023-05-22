


import { Document ,Page} from 'react-pdf/dist/esm/entry.webpack'
import React, { useState } from 'react'
import pdfFile from "../pdfs/html.pdf"
function Pdfs() {

    const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

	return (
		<div>
			<nav >
                <div style={{display:"flex",flexDirection:"row",gap:354}}>

				<button className='btn btn-primary' onClick={goToPrevPage}>Prev</button>
                <p>
					Page {pageNumber} of {numPages}
				</p>
				<button className='btn btn-primary' onClick={goToNextPage}>Next</button></div>
			</nav>

			<Document
				file={pdfFile}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} />
			</Document>
		</div>
	);
}

export default Pdfs











{/* <nav style={{marginTop:"-530px"}}>
<div>
<button className='btn btn-primary' onClick={goToPrevPage}>Prev</button>
<button style={{marginLeft:"800px"}} className='btn btn-primary' onClick={goToNextPage}>Next</button></div>
<p>
    Page {pageNumber} of {numPages}
</p>
</nav> */}