/**
 * External dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import './editor.scss';
import './style.scss';
import Lyrics from './lyrics.jsx';

const { registerBlockType } = wp.blocks;

const blockAttr = {
	lyrics: {
		source: 'children',
		selector: '.song-lyrics__data',
	},
	title: {
		source: 'children',
		selector: '.song-lyrics__title',
	},
};

registerBlockType( 'wpblocks/song-lyrics', {
	title: __( 'Song Lyrics' ),
	description: __( 'Get Song Lyrics' ),
	attributes: blockAttr,
	category: 'common',
	edit: Lyrics,
	save: props => {
		const title = props.attributes.title;

		return (
			<div className={ props.className ? props.className : '' }>
				<p className="song-lyrics__title" >{ title }</p>
			</div>
		);
	},
} );

