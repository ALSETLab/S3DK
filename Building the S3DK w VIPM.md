Building the S3DK w/ VIPM

To add, remove, or edit any files within a labview package( for our case the S3DK) you must use the VI package manager developed by JKL. In order to use the VIPM the user must have the build file downloaded as well as any VIs/supporting files and have uninstalled the current version of he S3DK. However before doing this the any additions or edits of any VIs must be saved in an accessible place for retrieval later on.

To build a package you must also have the source file taken from the S3DK folder under Labview. Below are the necessary files:

![](https://lh3.googleusercontent.com/Puh1b9z-WHLe47qVeUFp0L1EpqkV5oB9xBbborByZmi8keXLx8grJKN6ZIsiEl4U1ZBovRA5DCVZP2TM-erV0BONUV2ZyC6vq1lxmOemVX2sITEZf_qBwgjf2swiUnp_kj0g1sTB)

After locating all the files group the above files and any new additions/edits to the source file.

To first build a package is to open VIPM, then click the “build a package” button which is the box with a hammer icon.

![](https://lh6.googleusercontent.com/3yo4YEp_Ql8EM0d8xxUWdm5ZoYS5a6Ezoe7J4qMGXp-MYmSRq69mIQpHz0UZac8T61tTvDwtKhiohzX4rAtyiYktj-lXcSZnxkZWa-ZpqKByOLtDCQ1I7Lxf32WOVYidXqQR5TYd)

After words a new window will appear with the names of different packages and options to open new or already existing builds. Click “Smart grid Synchrophasor SDK (S3DK)” choice, if not available click on the open existing option and search for the package.

![](https://lh5.googleusercontent.com/ZCChuQGL4Ec6dLURcQN1g_ERY-NPy6QkwCns9jjwQFt8WqSbCrBxZFIETa3J-bpjgW2SGhO6vkXSsjkxBIMyeUmhF9zm8A2jgcNrOwFi9pXhlNbB7Mpuv_tFNAp8CxjqRhp1Sw3L)

Once opening the package will give display a menu:

![](https://lh5.googleusercontent.com/-nnoyZbJ9qArCBY0XIqycfyAULMOVe3vBvpmq7DpKQ7I6mCvyPSqdRWOpN-5YMmSWm07IZW_3J7b6t-eW5lvgbXt2Yb2agVgBH1NYeiZEqpD0Z71OzzsLBfh2qjdhzZBUjNyLbtt)

Build information: Used to find files used for building the package, Version update, and adds release notes for keeping track of changes.

Display information: Displays information to the user about general information regarding the company producing it.

Description: The gives details about the product as a whole and offers a chance for in depth detail depending on who is using the build

Palettes: The palette editor is used to customize the location and display of the VIs. It is in this menu that the layout for the VIs and which VIs appear and don’t appear can be customized. The function palette option can be edited by right clicking and clicking edit palette. Any VI or sub folder not needed by the end user can be moved to the control palette.

Destination: Controls where the files are sent to for the end user.

Source settings: Used to customize the files used to build the package. For example, if any unnecessary files are used for a VI that don’t need to be transferred over can be omitted with this option.

  

After going through the options click the box and hammer icon and the package should build. Common error:

Cross-Linking: Happens if there is another VI with the same name, can be the result of still having the original files under labview. A package cannot be built if there is a previous file downloaded or located in labview.
