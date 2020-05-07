import yaml
import os

with open("app.yaml", 'r') as appyml:
    app = yaml.load(appyml)

app['env_variables']['DBURL'] = os.environ['DBURL']

with open("app.yaml", "w") as appyml:
    yaml.dump(app, appyml)