import React from 'react';
import './Collection-Preview.styles.scss';

import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((item, idx, array) => idx < 4)
				.map(({ id, ...ItemProps }) => <CollectionItem key={id} {...ItemProps} />)}
		</div>
	</div>
);

export default CollectionPreview;
