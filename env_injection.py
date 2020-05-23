import yaml
import os

with open("app.yaml", 'r') as appyml:
    app = yaml.load(appyml)

app['env_variables']['DBURL'] = os.environ['DBURL']
app['env_variables']['EMAIL'] = os.environ['SENDGRID_EMAIL_FROM']
app['env_variables']['SENDGRID_API_KEY'] = os.environ['SENDGRID_API_KEY']

with open("app.yaml", "w") as appyml:
    yaml.dump(app, appyml)