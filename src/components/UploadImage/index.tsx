import {FC} from 'react';
import {FilePond, registerPlugin} from 'react-filepond';

import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode);

interface UploadImageProps {
	files?: any;
	setFiles: any;
}

const UploadImage: FC<UploadImageProps> = ({setFiles}) => {
	return (
		<div className="App">
			<FilePond
				onupdatefiles={setFiles}
				allowMultiple={true}
				maxFiles={3}
				allowFileEncode
				server={{
					process: {
						url: 'http://localhost:5000/api/upload', // Путь к серверу для обработки файлов
						method: 'POST',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
						},
					},
				}}
				name="files"
				labelIdle='<button class="filepond--label-action">Browse</button>'
			/>
		</div>
	);
};

export default UploadImage;