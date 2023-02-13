import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {NavLink} from 'react-router-dom';
import {routes} from './routes';
import styles from './styles.module.css';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes, {disableDefaults: true});

  return (
    <div className={styles.wrapper}>
      {breadcrumbs.map(({
                          match,
                          breadcrumb
                        }) => (
        <span className={styles.breadcrumb} key={match.pathname}>
          <NavLink className={styles.link} to={match.pathname}>{breadcrumb}</NavLink>
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;
