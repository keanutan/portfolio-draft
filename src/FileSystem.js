import folder from './Components/FileSystemComponents/folder.svg';

export const FileSystem = {
    Name: 'Keanutan',
    Image: <img className="projects-window-file-system-files-item-image" src={folder} />,
    Height: 0,
    Link: '',
    Subfolders: [
        {
            Name: 'Projects',
            Image: <img className="projects-window-file-system-files-item-image" src={folder} />,
            Height: 1,
            Link: '',
            Subfolders: [
                {
                    Name: 'Java',
                    Image: <img className="projects-window-file-system-files-item-image" src={folder} />,
                    Height: 2,
                    Link: '',
                    Subfolders: [
                        {
                            Name: 'Binary Search Tree Visualizer',
                            Image: <img className="projects-window-file-system-files-item-image" src={folder} />,
                            Height: 3,
                            Link: 'https://github.com/keanutan/Binary-Search-Tree-Visualizer',
                            Subfolders: []
                        },
                    ]
                },
                {
                    Name: 'Python',
                    Image: <img className="projects-window-file-system-files-item-image" src={folder} />,
                    Height: 2,
                    Link: '',
                    Subfolders: [
                        {
                            Name: 'Fast Fourier Transform Image Processor',
                            Image: <img className="projects-window-file-system-files-item-image" src={folder} />,
                            Height: 3,
                            Link: 'https://github.com/keanutan/ECSE-316_FFT',
                            Subfolders: []
                        }
                    ]
                },
            ]
        },
    ]
}