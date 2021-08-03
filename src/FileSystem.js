import folder from './Components/FileSystemComponents/folder.svg';
import Binary_Search_Tree_Visualizer_Icon from './Components/FileSystemComponents/Binary_Search_Tree_Visualizer_Icon.svg';
import Fast_Fourier_Transform_Image_Processor_Icon from './Components/FileSystemComponents/Fast_Fourier_Transform_Image_Processor_Icon.svg';

export const FileSystem = {
    Name: 'Keanutan',
    Parent: '',
    Image: <img className="projects-window-file-system-files-item-image" src={folder} />,
    Height: 0,
    Link: '',
    Subfolders: [
        {
            Name: 'Projects',
            Parent: 'Keanutan',
            Image: <img className="projects-window-file-system-files-item-image" src={folder} />,
            Height: 1,
            Link: '',
            Subfolders: [
                {
                    Name: 'Java',
                    Parent: 'Projects',
                    Image: <img className="projects-window-file-system-files-item-image" src={folder} />,
                    Height: 2,
                    Link: '',
                    Subfolders: [
                        {
                            Name: 'Binary Search Tree Visualizer',
                            Parent: 'Java',
                            Image: <img className="projects-window-file-system-files-item-image" src={Binary_Search_Tree_Visualizer_Icon} />,
                            Height: 3,
                            Link: 'https://github.com/keanutan/Binary-Search-Tree-Visualizer',
                            Subfolders: []
                        },
                    ]
                },
                {
                    Name: 'Python',
                    Parent: 'Projects',
                    Image: <img className="projects-window-file-system-files-item-image" src={folder} />,
                    Height: 2,
                    Link: '',
                    Subfolders: [
                        {
                            Name: 'Fast Fourier Transform Image Processor',
                            Parent: 'Python',
                            Image: <img className="projects-window-file-system-files-item-image" src={Fast_Fourier_Transform_Image_Processor_Icon} />,
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