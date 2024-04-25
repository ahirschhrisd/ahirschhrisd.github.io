# Wallpaper
Tina Zhou, Ariel Hirschhorn


## How to do pull requests/changes 
Before making significant changes:

2. git checkout main
3. git pull

1. MAKE SURE TO EDIT CHANGELOG- copy the unreleased section, add your branch name, and add in your changes
4. git checkout -b [yourname]-[releaseno]
5. git add -p
6. git status

enter messge at top --> "esc" --> ":wq" at bottom --> enter

7. git commit
8. git push

Then, open a pull request, approve it, and merge into main!

## Documentation for makers.json and wallpapers.json

### wallpapers.json
wallpapers.json is formatted with each wallpaper as an individual JSON object with the fields:

'category': one of the following: 'Borders_Dados_Friezes', 'Chinese_Wallpapers', 'Design_works', 'DIY', 'Domino_Early', 'Fragments', 'Manufacturing_Stamps', 'Panels_cameos_architectural', 'Outliers', 'Repeating_Patterns', 'Scenic_Pilaster_Panel'
'tombstone': full tombstone information with credit, including the maker
'obj_number': the object number, used for linking objects to makers.json
'pp_embed': the picturepark embed link
'micrio': the deep zoom embed link
'location': the location (i.e. French) if no known maker
'title': the title of the object
'rest': the tombstone not including the title, object maker, or location if no known maker

{'category': 'Repeating_Patterns', 'tombstone': 'Jean Richard Bon, manufacturer\nParis, France; active 1799–1808\nWallpaper, 1799\nWoodblock print on paper\n68 x 54.9 cm (26 3/4 x 21 5/8 in.)\nMary B. Jackson Fund 34.974', 'obj_number': '34.974', 'pp_embed': 'https://risdmuseum.cdn.picturepark.com/v/VGnC3fwW/', 'micrio': 'https://i.micr.io/TSFct/45547a041d614a9998263de979814bac', 'location': None, 'title': 'Wallpaper,', 'rest': 'Woodblock print on paper\n68 x 54.9 cm (26 3/4 x 21 5/8 in.)\nMary B. Jackson Fund 34.974', 'date': '1799'}


### makers.json
makers.json is formatted with each maker as an individual JSON object with the fields:

'attribution': If there is an attribution to the maker, i.e. 'In the style of'
'name': The name of the maker
'location': The location/dates of the maker
'obj_number': the object number, used as a key for wallpapers.json 

{"attribution": null, "name": "Langlois", "role": " manufacturer", "location": "Paris, France; 1800–1814", "obj_number": "34.955"}


